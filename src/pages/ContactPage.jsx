import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './styles/contactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [systemStats, setSystemStats] = useState({
    memory: '128KB',
    boxes: '8/20',
    status: 'BOOTING...'
  });
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [isEmailJSReady, setIsEmailJSReady] = useState(false);

  const welcomeMessage = "Hello there! Welcome to my PC system. Use this form to send me a message!";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < welcomeMessage.length) {
        setTypedText(welcomeMessage.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);

    // Initialize EmailJS
    try {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      setIsEmailJSReady(true);
      setSystemStats(prev => ({
        ...prev,
        status: 'READY'
      }));
    } catch (error) {
      console.error('EmailJS initialization error:', error);
      setSystemStats(prev => ({
        ...prev,
        status: 'ERROR'
      }));
    }

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isEmailJSReady) {
      setSystemStats(prev => ({
        ...prev,
        status: 'SYSTEM NOT READY'
      }));
      return;
    }

    // Rate limiting - only allow one submission every 30 seconds
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      setSystemStats(prev => ({
        ...prev,
        status: 'COOLDOWN...'
      }));
      return;
    }

    setSystemStats(prev => ({
      ...prev,
      status: 'SENDING...'
    }));

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        }
      );

      setLastSubmitTime(now);
      setSystemStats(prev => ({
        ...prev,
        status: 'SENT!'
      }));
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset status after 2 seconds
      setTimeout(() => {
        setSystemStats(prev => ({
          ...prev,
          status: 'READY'
        }));
      }, 2000);

    } catch (error) {
      console.error('Error:', error);
      setSystemStats(prev => ({
        ...prev,
        status: 'ERROR!'
      }));
      
      // Reset status after 2 seconds
      setTimeout(() => {
        setSystemStats(prev => ({
          ...prev,
          status: 'READY'
        }));
      }, 2000);
    }
  };

  return (
    <div className="contact-page">
      <div className="content-wrapper">
        <div className="pc-screen">
          <div className="screen-header">
            <div className="screen-title">PROF. OAK'S PC</div>
            <div className="screen-status">{systemStats.status}</div>
          </div>
          
          <div className="screen-content">
            <div className="system-stats">
              <div className="stat-item">
                <span className="stat-label">MEMORY:</span>
                <span className="stat-value">{systemStats.memory}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">BOXES:</span>
                <span className="stat-value">{systemStats.boxes}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">TIME:</span>
                <span className="stat-value">{new Date().toLocaleTimeString()}</span>
              </div>
            </div>

            <div className="oak-message">
              <p className="typing-text">
                {typedText}
                {isTyping && '█'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">TRAINER NAME:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="retro-input"
                  maxLength="20"
                  disabled={!isEmailJSReady}
                />
                <div className="input-stats">
                  {formData.name.length}/20 CHARS
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">PC BOX (EMAIL):</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="retro-input"
                  disabled={!isEmailJSReady}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">MESSAGE DATA:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="retro-input"
                  rows="4"
                  maxLength="500"
                  disabled={!isEmailJSReady}
                />
                <div className="input-stats">
                  {formData.message.length}/500 CHARS
                </div>
              </div>

              <div className="button-group">
                <button 
                  type="submit" 
                  className="pc-button"
                  disabled={!isEmailJSReady}
                >
                  SEND
                </button>
                <button 
                  type="reset" 
                  className="pc-button cancel"
                  disabled={!isEmailJSReady}
                >
                  CANCEL
                </button>
              </div>
            </form>

            <div className="screen-footer">
              <div className="footer-text">BILL'S PC COMMUNICATION SYSTEM</div>
              <div className="footer-version">v1.0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
