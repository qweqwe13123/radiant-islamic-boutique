import { ArrowLeft, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Instagram } from "lucide-react";

const ContactsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDDCB5' }}>
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'rgba(253, 220, 181, 0.9)', borderColor: 'rgba(180, 130, 80, 0.15)' }}>
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={() => navigate("/")} className="p-2 rounded-full transition-colors" style={{ color: '#5C3D2E' }}>
            <ArrowLeft size={20} />
          </button>
          <h1 className="font-display text-lg font-semibold" style={{ color: '#5C3D2E' }}>ZARIFA COLLECTION</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-16 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-display text-4xl font-bold" style={{ color: '#5C3D2E' }}>Контакты</h2>
          <div className="w-16 h-[3px] mx-auto rounded-full" style={{ background: 'linear-gradient(to right, transparent, #C4956A, transparent)' }} />
          <p className="font-body text-sm" style={{ color: '#A0714E' }}>Свяжитесь со мной любым удобным способом</p>
        </div>

        <div className="space-y-6">
          {/* Telegram */}
          <a
            href="https://t.me/senorita_chilli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{ backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid rgba(196, 149, 106, 0.2)' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(196, 149, 106, 0.2)' }}>
              <svg viewBox="0 0 24 24" fill="#5C3D2E" className="w-7 h-7">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
            <div>
              <p className="font-display text-lg font-bold" style={{ color: '#5C3D2E' }}>Telegram</p>
              <p className="font-body text-sm" style={{ color: '#A0714E' }}>@senorita_chilli</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/senorita.chili_?igsh=MTE4cTQxdHRydjRwNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{ backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid rgba(196, 149, 106, 0.2)' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(196, 149, 106, 0.2)' }}>
              <Instagram size={28} style={{ color: '#5C3D2E' }} />
            </div>
            <div>
              <p className="font-display text-lg font-bold" style={{ color: '#5C3D2E' }}>Instagram</p>
              <p className="font-body text-sm" style={{ color: '#A0714E' }}>@senorita.chili_</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:mega.zafira@mail.ru"
            className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{ backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid rgba(196, 149, 106, 0.2)' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(196, 149, 106, 0.2)' }}>
              <Mail size={28} style={{ color: '#5C3D2E' }} />
            </div>
            <div>
              <p className="font-display text-lg font-bold" style={{ color: '#5C3D2E' }}>Почта</p>
              <p className="font-body text-sm" style={{ color: '#A0714E' }}>mega.zafira@mail.ru</p>
            </div>
          </a>
        </div>

        <div className="text-center pt-8">
          <p className="font-body text-xs tracking-widest uppercase" style={{ color: '#A0714E' }}>
            © 2026 ZARIFA COLLECTION
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
