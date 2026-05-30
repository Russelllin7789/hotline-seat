import type { ISeatIntro } from "@/types/ISeatIntro";
import SeatDetail from "./SeatDetail";
import SectionHeader from "./SectionHeader";

const seatIntros: ISeatIntro[] = [
  {
    iconUrl: "https://img.icons8.com/?size=512&id=34961&format=png",
    id: "set-seats",
    title: "場佈",
    description: "在觀眾入場前排好座位，並完成場復。",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/93/93938.png",
    id: "guidance",
    title: "帶位",
    description: "儘速將觀眾引導至正確的位號，避免在走道逗留。",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/5110/5110955.png",
    id: "keep-orders",
    title: "管秩序",
    description: "確保表演品質，讓大家都有好的體驗。",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/5896/5896724.png",
    id: "others",
    title: "機動",
    description: "場內什麼都有可能發生，看表演不要太專心。",
  },
];

const steps = [
  { num: "01", title: "報到", desc: "活動當天準時到場，完成志工報到。" },
  { num: "02", title: "分工", desc: "依現場狀況分配場佈、帶位等工作。" },
  { num: "03", title: "入場", desc: "協助觀眾快速就座，維持動線順暢。" },
  { num: "04", title: "散場", desc: "活動結束後協助清場，確保安全離場。" },
];

export default function SeatSection() {
  return (
    <div className="bg-cream py-16 sm:py-24">
      <div className="section-container">
        <SectionHeader
          label="Volunteer"
          title="內場組工作簡介"
          description="內場組是感恩會順利進行的關鍵角色，從場佈到散場，每個環節都需要你／妳！"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {seatIntros.map((intro) => (
            <SeatDetail key={intro.id} intro={intro} />
          ))}
        </div>

        <SectionHeader
          label="Process"
          title="志工流程"
          description="從報到到散場，四個步驟帶你了解內場組的一天。"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="card p-6 sm:p-8 relative overflow-hidden">
              <span className="absolute top-4 right-4 text-5xl font-bold text-hotline/10 select-none">
                {step.num}
              </span>
              <span className="text-hotline font-bold text-sm">{step.num}</span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
