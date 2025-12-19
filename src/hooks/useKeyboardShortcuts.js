import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useKeyboardShortcuts = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only activate shortcuts when not typing in an input/textarea
      if (
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.isContentEditable
      ) {
        return;
      }

      // Alt/Cmd + H: Go to Home
      if ((e.altKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        navigate('/');
      }

      // Alt/Cmd + A: Go to About
      if ((e.altKey || e.metaKey) && e.key === 'a') {
        e.preventDefault();
        navigate('/about');
      }

      // Alt/Cmd + F: Go to Features
      if ((e.altKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        navigate('/features');
      }

      // Alt/Cmd + C: Go to Contact
      if ((e.altKey || e.metaKey) && e.key === 'c') {
        e.preventDefault();
        navigate('/contact');
      }

      // Escape: Close modals/menus (handled by individual components)
      // Slash: Focus search (if implemented)
      if (e.key === '/' && !e.altKey && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        // Could focus search input if implemented
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);
};

