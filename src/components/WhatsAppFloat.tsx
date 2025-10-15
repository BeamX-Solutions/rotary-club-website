import { useState } from 'react';
import { X, Send } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const contacts = [
    {
      id: 1,
      name: 'RTN. AKINLABI AKINTAYO',
      title: 'Technical Director, TRABERG Construction',
      phone: '+2348165423226'
    },
    {
      id: 2,
      name: 'RTN. BUSAYO OWAH',
      title: 'CEO, KORRECT HOMES',
      phone: '+2348149017989'
    },
    {
      id: 3,
      name: 'RTN. AFOLABI OLUFUNMILAYO',
      title: 'Secretary, RC Lekki Golden',
      phone: '+2347019080535'
    },
    {
      id: 4,
      name: 'RTN. OBINNA NWEKE',
      title: 'Principal Consultant, BeamX Solutions',
      phone: '+2348164711076'
    },
    {
      id: 5,
      name: 'RTN. VICTOR ITOTOI',
      title: 'Membership Chair, RC Falomo',
      phone: '+2348023209322'
    },
    {
      id: 6,
      name: 'RTN. AGNES',
      title: 'Youth Service Chair, RC Lekki Golden',
      phone: '+2347034970389'
    }
  ];

  const handleContactClick = (phone) => {
    const whatsappUrl = `https://wa.me/${phone}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setSelectedContact(null);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedContact(null), 300);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-60"
          onClick={handleClose}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(2px)'
          }}
        />
      )}

      {/* Main Container */}
  <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* Chat Window */}
        {isOpen && (
          <div
            className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300"
            style={{ maxHeight: '340px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg tracking-tight">WhatsApp</h3>
                  <p className="text-xs text-white/80 mt-1">Click to chat with our team</p>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Contacts List */}
            <div className="flex-1 overflow-y-auto">
              {selectedContact ? (
                <div className="h-full flex flex-col">
                  {/* Selected Contact View */}
                  <div className="p-4 border-b border-gray-100 bg-gray-50">
                    <button
                      onClick={() => setSelectedContact(null)}
                      className="text-[#128C7E] text-sm font-medium mb-3 flex items-center gap-2 hover:opacity-75"
                    >
                      ← Back to contacts
                    </button>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#128C7E] to-[#25D366]" />
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">{selectedContact.name}</p>
                        <p className="text-xs text-gray-600">{selectedContact.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Message Area */}
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#128C7E] to-[#25D366] mb-4" />
                    <p className="text-gray-700 font-medium mb-4">
                      Ready to chat with <span className="text-[#128C7E] font-bold">{selectedContact.name.split(' ').pop()}</span>?
                    </p>
                    <button
                      onClick={() => handleContactClick(selectedContact.phone)}
                      className="w-full bg-gradient-to-r from-[#128C7E] to-[#25D366] hover:from-[#0f6f5c] hover:to-[#1fa857] text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 group"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Open WhatsApp
                    </button>
                  </div>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {contacts.map((contact) => (
                    <button
                      key={contact.id}
                      onClick={() => setSelectedContact(contact)}
                      className="w-full p-4 hover:bg-gray-50 transition-all duration-200 text-left group active:bg-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                          <svg className="w-7 h-7" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900 text-sm group-hover:text-[#128C7E] transition-colors truncate">
                            {contact.name}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">
                            {contact.title}
                          </p>
                        </div>
                        <div className="text-gray-300 group-hover:text-[#128C7E] transition-colors text-lg">→</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`h-16 w-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden ${
            isOpen
              ? 'bg-white text-gray-700 hover:bg-gray-50'
              : 'bg-gradient-to-br from-[#128C7E] to-[#25D366] text-white hover:shadow-3xl'
          }`}
          style={{
            transform: isOpen ? 'scale(1)' : 'scale(1)',
          }}
        >
          {/* Background animation */}
          {!isOpen && (
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          )}

          {/* WhatsApp SVG Icon */}
          {!isOpen ? (
            <svg
              className="w-8 h-8 relative z-10"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          ) : (
            <X className="w-8 h-8 relative z-10" />
          )}

          {/* Pulse animation when closed */}
          {!isOpen && (
            <div className="absolute inset-0 rounded-full border-4 border-white opacity-0 animate-pulse" />
          )}
        </button>
      </div>
    </>
  );
};

export default WhatsAppFloat;