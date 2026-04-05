import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import stylistPhoto from "@/assets/stylist-photo.jpg";
import styleLook1 from "@/assets/style-look-1.jpg";
import styleLook2 from "@/assets/style-look-2.jpg";

const WardrobePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDDCB5' }}>
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-md border-b border-gold/10" style={{ backgroundColor: 'rgba(253, 220, 181, 0.9)' }}>
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="p-2 hover:bg-gold/10 rounded-full transition-colors"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <h1 className="font-display text-lg font-semibold text-foreground">ZARIFA COLLECTION</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-12">
        {/* Stylist intro */}
        <div className="text-center space-y-6">
          <div className="rounded-2xl overflow-hidden shadow-lg mx-auto" style={{ maxWidth: '320px' }}>
            <img
              src={stylistPhoto}
              alt="Диана Зафирова"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-6">
            <h2 className="font-display text-3xl font-bold text-foreground">Диана Зафирова</h2>
            <p className="font-body text-lg text-muted-foreground mt-2">персональный стилист</p>
          </div>
          <p className="font-body text-sm text-muted-foreground italic">| одену тебя красиво |</p>
          <div className="w-px h-12 bg-gold/30 mx-auto" />
        </div>

        {/* Разбор гардероба онлайн */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block border-2 border-foreground px-6 py-3">
              <h3 className="font-display text-xl font-bold text-foreground tracking-wider uppercase">
                Разбор гардероба
              </h3>
            </div>
          </div>

          <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
            <h4 className="font-display text-lg font-bold text-foreground text-center">В РАЗБОР ВХОДИТ:</h4>
            
            <ul className="space-y-3">
              <li>• одежда – 50 предметов</li>
              <li>• обувь по сезону, сумки, ремни, головные уборы – до 20 предметов; украшения в разбор не входят</li>
              <li>• составляется шопинг-лист недостающих позиций, которые требуются в гардероб, показывая на слайде как выглядит вещь</li>
            </ul>
          </div>

          <div className="bg-gold/5 border-t-2 border-gold/20 p-6 space-y-3 text-center">
            <p className="font-body text-sm text-gold font-medium italic">
              Включает поддержку в чате со мной по стилистическим вопросам в течение 14 дней
            </p>
            <p className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
              СРОК ВЫПОЛНЕНИЯ 5 ДНЕЙ
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Вся информация оформляется в презентацию и предоставляется на 6й день в течение дня.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block border-2 border-foreground px-8 py-4">
              <span className="font-display text-2xl font-bold text-foreground">16 900 руб.</span>
            </div>
          </div>

          <p className="font-body text-xs text-muted-foreground text-center italic">
            *Ссылки из шопинг-листа не предоставляются. Всю одежду вы можете купить самостоятельно, имея мои подсказки в презентации, или обратиться за последующим онлайн – шопингом
          </p>

          <div className="bg-background p-6 space-y-2">
            <h4 className="font-display text-lg font-bold text-foreground">Как подготовиться к разбору гардероба:</h4>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              фотографировать одежду и предметы гардероба желательно на однотонном фоне; стараться не держать обувь / сумки в руке при фотографировании, а фотографировать их самостоятельно.
            </p>
          </div>

          <a
            href="https://t.me/senorita_chilli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-[#7B5B3A] hover:bg-[#6a4e32] text-white py-4 px-6 rounded-xl transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 flex-shrink-0">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span className="font-body text-base font-semibold tracking-wider uppercase">ЗАПИСАТЬСЯ</span>
          </a>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-1/2 h-px bg-gold/20" />
        </div>

        {/* Разбор с выездом */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-block border-2 border-foreground px-6 py-3">
              <h3 className="font-display text-xl font-bold text-foreground tracking-wider uppercase">
                РАЗБОР ГАРДЕРОБА
              </h3>
            </div>
            <p className="font-body text-base text-muted-foreground">с выездом на дом</p>
            <div className="w-px h-10 bg-gold/30 mx-auto" />
          </div>

          <div className="text-center">
            <div className="inline-block border-2 border-foreground px-8 py-4">
              <span className="font-display text-2xl font-bold text-foreground">18 900 руб.</span>
            </div>
          </div>

          <a
            href="https://t.me/senorita_chilli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-[#7B5B3A] hover:bg-[#6a4e32] text-white py-4 px-6 rounded-xl transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 flex-shrink-0">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span className="font-body text-base font-semibold tracking-wider uppercase">ЗАПИСАТЬСЯ</span>
          </a>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-1/2 h-px bg-gold/20" />
        </div>

        {/* Онлайн капсула */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block border-2 border-foreground px-6 py-3">
              <h3 className="font-display text-xl font-bold text-foreground tracking-wider uppercase">
                ОНЛАЙН КАПСУЛА
              </h3>
            </div>
          </div>

          <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
            <p>• Подбор 10-15 предметов гардероба сочетаемых друг с другом, включая аксессуарную группу: обувь, сумки, ремни по необходимости, очки по индивидуальному запросу; аксессуары в подбор не входят</p>
            <p>В соответствии с вашей фигурой, внешностью и образом жизни</p>
            <p>• Составление комплектов. Количество готовых комплектов не менее 20</p>
            <p>• Предоставляются все ссылки по позициям и по аксессуарной группе</p>
          </div>

          <div className="bg-gold/5 border-t-2 border-gold/20 p-6 space-y-3 text-center">
            <div className="w-px h-8 bg-gold/30 mx-auto mb-3" />
            <h4 className="font-display text-base font-bold text-foreground uppercase tracking-wider">
              ТАКЖЕ В УСЛУГУ ВХОДИТ:
            </h4>
            <p className="font-body text-sm text-gold font-medium italic">
              Поддержка в чате со мной по стилистическим вопросам в течение 14 дней
            </p>
            <p className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
              СРОК ВЫПОЛНЕНИЯ 5 ДНЕЙ
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Вся информация оформляется в презентацию и предоставляется на 6 день в течении дня.
            </p>
            <p className="font-body text-xs text-muted-foreground italic">
              *возможна корректировка до 3х позиций из капсулы
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block border-2 border-foreground px-8 py-4">
              <span className="font-display text-2xl font-bold text-foreground">16 900 руб.</span>
            </div>
          </div>

          <a
            href="https://t.me/senorita_chilli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-[#7B5B3A] hover:bg-[#6a4e32] text-white py-4 px-6 rounded-xl transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 flex-shrink-0">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span className="font-body text-base font-semibold tracking-wider uppercase">ЗАПИСАТЬСЯ</span>
          </a>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-1/2 h-px bg-gold/20" />
        </div>

        {/* Комплекс */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block border-2 border-foreground px-6 py-3">
              <h3 className="font-display text-xl font-bold text-foreground tracking-wider uppercase">
                КОМПЛЕКС:
              </h3>
            </div>
            <div className="inline-block border-2 border-foreground px-6 py-3 mt-3">
              <p className="font-display text-base font-bold text-foreground">
                разбор гардероба и капсула онлайн
              </p>
            </div>
          </div>

          <div className="font-body text-sm text-muted-foreground leading-relaxed text-center space-y-3">
            <p>Обе услуги объединены в презентацию. Разбирается гардероб в рамках услуги «разбор гардероба», и подбираются позиции, необходимые в гардероб, с предоставлением всех ссылок.</p>
            <p className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
              СРОК ВЫПОЛНЕНИЯ 7 ДНЕЙ
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Вся информация оформляется в презентацию и предоставляется на 8 день в течении дня.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block border-2 border-foreground px-8 py-4">
              <span className="font-display text-2xl font-bold text-foreground">24 900 руб.</span>
            </div>
          </div>

          <a
            href="https://t.me/senorita_chilli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-[#7B5B3A] hover:bg-[#6a4e32] text-white py-4 px-6 rounded-xl transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 flex-shrink-0">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span className="font-body text-base font-semibold tracking-wider uppercase">ЗАПИСАТЬСЯ</span>
          </a>
        </div>

        {/* Gallery */}
        <div className="flex justify-center">
          <div className="w-1/2 h-px bg-gold/20" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <img src={styleLook1} alt="Образ 1" className="w-full h-64 object-cover" />
          <img src={styleLook2} alt="Образ 2" className="w-full h-64 object-cover" />
        </div>

        {/* Bottom CTA */}
        <div className="text-center pb-8">
          <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-4">
            © 2026 ZARIFA COLLECTION
          </p>
        </div>
      </div>
    </div>
  );
};

export default WardrobePage;
