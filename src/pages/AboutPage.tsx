import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import stylistPhoto from "@/assets/stylist-photo.jpg";

const AboutPage = () => {
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

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-10">
        {/* Photo */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ maxWidth: '280px' }}>
            <img src={stylistPhoto} alt="Зарифа" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="text-center space-y-2">
          <h2 className="font-display text-3xl font-bold" style={{ color: '#5C3D2E' }}>Зарифа</h2>
          <p className="font-body text-sm italic" style={{ color: '#B8865A' }}>
            <span style={{ color: '#C4956A' }}>━━</span> одену тебя красиво <span style={{ color: '#C4956A' }}>━━</span>
          </p>
        </div>

        <div className="w-16 h-[3px] mx-auto rounded-full" style={{ background: 'linear-gradient(to right, transparent, #C4956A, transparent)' }} />

        <div className="space-y-6 font-body text-sm leading-relaxed" style={{ color: '#7A5C45' }}>
          <h3 className="font-display text-xl font-bold text-center" style={{ color: '#5C3D2E' }}>
            Всем Привет! Я Зарифа
          </h3>

          <p className="text-center">
            Я делаю экспертный разбор стиля с опытом в бьюти-сфере
          </p>

          <div className="p-6 rounded-2xl space-y-4" style={{ backgroundColor: 'rgba(255,255,255,0.4)', border: '1px solid rgba(196, 149, 106, 0.2)' }}>
            <p>
              Мой подход основан не только на теории, но и на многолетнем опыте работы с внешностью женщин.
            </p>
            <p className="font-display font-bold" style={{ color: '#5C3D2E' }}>Я работала:</p>
            <ul className="space-y-2 pl-2">
              <li>— парикмахером</li>
              <li>— мастером маникюра</li>
              <li>— специалистом по наращиванию ресниц</li>
              <li>— в сфере ухода и красоты</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl space-y-4" style={{ backgroundColor: 'rgba(255,255,255,0.4)', border: '1px solid rgba(196, 149, 106, 0.2)' }}>
            <p className="font-display font-bold" style={{ color: '#5C3D2E' }}>Благодаря этому я умею с первого взгляда определить, что подходит именно вам:</p>
            <ul className="space-y-2 pl-2">
              <li>— по форме лица</li>
              <li>— по типу фигуры</li>
              <li>— по общему образу и энергетике</li>
            </ul>
          </div>

          <p className="text-center italic" style={{ color: '#B8865A' }}>
            Я вижу, какой стиль подчеркнет вашу красоту и сделает вас уверенной ещё до детального разбора.
          </p>
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

export default AboutPage;
