import Image from "next/image";

interface AnswerCardProps {
  totalScore: number;
  onTestAgain: () => void;
}

function getResultMessage(totalScore: number): string {
  if (totalScore === 0) {
    return "像你／妳這種完人，最適合的就是內場組！";
  }
  if (totalScore <= 20) {
    return "內向務實的你／妳，可以嘗試內場組／前台組／後台組的工作喔～";
  }
  if (totalScore <= 40) {
    return "可塑性很高的你／妳，想去哪都可以！隨心所欲吧！";
  }
  return "大膽又外向的你／妳，可以去小天使組或義賣組幫忙提振熱線的募款額喔～";
}

function getResultIcon(totalScore: number): string {
  if (totalScore <= 20) {
    return "https://cdn-icons-png.flaticon.com/512/1029/1029183.png";
  }
  if (totalScore <= 40) {
    return "https://cdn-icons-png.flaticon.com/512/9671/9671424.png";
  }
  return "https://cdn-icons-png.flaticon.com/512/2526/2526208.png";
}

export default function AnswerCard({
  totalScore,
  onTestAgain,
}: AnswerCardProps) {
  return (
    <div className="card p-8 sm:p-12 text-center">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-hotline-light flex items-center justify-center">
        <Image
          src={getResultIcon(totalScore)}
          alt="result"
          width={64}
          height={64}
          className="w-16 h-16"
        />
      </div>

      <p className="text-xs font-semibold tracking-widest uppercase text-hotline mb-3">
        你的分類結果
      </p>
      <p className="text-lg sm:text-xl font-bold text-gray-900 leading-relaxed mb-8">
        {getResultMessage(totalScore)}
      </p>

      <button type="button" className="btn-outline" onClick={onTestAgain}>
        再測一次
      </button>

      <p className="mt-6 text-xs text-gray-400">#結果僅供參考</p>
    </div>
  );
}
