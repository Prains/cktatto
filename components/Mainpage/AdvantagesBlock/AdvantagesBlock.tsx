import ContentZone from "@/components/ui/ContentZone/ContentZone";
import AdvantageListItem from "./AdvantageListItem/AdvantageListItem";

const AdvantagesBlock = () => {
  const advantages = [
    {
      title: "Качество результата",
      text: "Вы всегда получите то, за чем пришли",
    },
    {
      title: "Атмосфера и взаимодействие",
      text: "Прежде всего для нас вы гость, потом клиент, а в итоге - наш друг",
    },
    {
      title: "УНИКАЛЬНОЕ РАСПОЛОЖЕНИЕ",
      text: "АРТ-пространство №1 в городе",
    },
  ];

  return (
    <section>
      <ContentZone>
        <h3 className="text-semibold text-center uppercase">
          наши преимущества
        </h3>
        <ul className="mt-8 flex flex-col gap-6">
          {advantages.map((advantage) => {
            return (
              <li key={advantage.title}>
                <AdvantageListItem {...advantage} />
              </li>
            );
          })}
        </ul>
        <article className="flex flex-col gap-4 pt-[60px]">
          <p className="flex flex-col items-start justify-center rounded-bl-[10px] rounded-tr-[10px] border-[0.5px] border-[#1A0F0C] px-3 py-2 text-2xl font-bold italic">
            5
            <span className="text-[10px] font-normal">
              профессиональных тату-мастеров
            </span>
          </p>
          <div className="flex items-center justify-between gap-4">
            <p className="flex flex-col items-start justify-center rounded-bl-[10px] rounded-tr-[10px] border border-[#1A0F0C] px-3 py-2 text-2xl font-bold italic">
              2014
              <span className="text-[10px] font-normal">год основания</span>
            </p>
            <p className="flex flex-col items-start justify-center rounded-bl-[10px] rounded-tr-[10px] border border-[#1A0F0C] px-3 py-2 text-2xl font-bold italic">
              3000+
              <span className="text-[10px] font-normal">
                довольных клиентов
              </span>
            </p>
          </div>
        </article>
      </ContentZone>
    </section>
  );
};

export default AdvantagesBlock;
