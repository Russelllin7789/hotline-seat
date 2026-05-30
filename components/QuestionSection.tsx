"use client";

import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import QuestionDetail from "./QuestionDetail";
import AnswerCard from "./AnswerCard";
import type { IQuestionDetail } from "@/types/IQuestion";

interface IAnswer {
  QOne: string;
  QTwo: string;
  QThree: string;
}

const questions: IQuestionDetail[] = [
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1945/1945639.png",
    id: "Q1",
    question: "覺得朋友會怎麼形容你／妳？",
    optionA: "熱情活潑",
    optionB: "內斂沉穩",
    optionC: "與眾不同",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/9999/9999838.png",
    id: "Q2",
    question: "下列哪一個活動最能讓自己放鬆？",
    optionA: "好友相聚",
    optionB: "鑑往知來",
    optionC: "冥想靜坐",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3280/3280084.png",
    id: "Q3",
    question: "最可能把下列哪一個當午餐？",
    optionA: "少油鹽健康餐",
    optionB: "超商友善食光",
    optionC: "泰式酸辣河粉",
  },
];

export default function QuestionSection() {
  const [isFormFulfilled, setIsFormFulfilled] = useState(false);
  const [isSubmittedBefore, setIsSubmittedBefore] = useState(false);
  const [isResultShow, setIsResultShow] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState<IAnswer>({
    QOne: "",
    QTwo: "",
    QThree: "",
  });

  useEffect(() => {
    setIsFormFulfilled(
      userAnswer.QOne !== "" &&
        userAnswer.QTwo !== "" &&
        userAnswer.QThree !== ""
    );
  }, [userAnswer]);

  const handleAnswers = (id: string, answer: string) => {
    setUserAnswer((prev) => {
      if (id === "Q1") return { ...prev, QOne: answer };
      if (id === "Q2") return { ...prev, QTwo: answer };
      return { ...prev, QThree: answer };
    });
  };

  const handleFormSubmit = () => {
    if (!isSubmittedBefore) {
      setTotalScore(0);
      setIsResultShow(true);
      setIsSubmittedBefore(true);
      return;
    }

    let score = 0;
    if (userAnswer.QOne === "熱情活潑") score += 20;
    else if (userAnswer.QOne === "與眾不同") score += 10;
    if (userAnswer.QTwo === "好友相聚") score += 10;
    else if (userAnswer.QTwo === "酒吧破浪") score += 20;
    if (userAnswer.QThree === "泰式酸辣河粉") score += 20;
    else if (userAnswer.QThree === "超商折扣品項") score += 10;

    setTotalScore(score);
    setIsResultShow(true);
  };

  const handleReTest = () => {
    setUserAnswer({ QOne: "", QTwo: "", QThree: "" });
    setIsResultShow(false);
    setIsFormFulfilled(false);
    setTotalScore(0);
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="section-container max-w-3xl">
        <SectionHeader
          label="Sorting Hat"
          title="分類帽"
          description="回答三個問題，看看哪個志工組別最適合你／妳！"
        />

        {!isResultShow ? (
          <div className="card p-6 sm:p-10">
            <div className="space-y-8">
              {questions.map((question) => (
                <QuestionDetail
                  key={question.id}
                  info={question}
                  selectedValue={
                    question.id === "Q1"
                      ? userAnswer.QOne
                      : question.id === "Q2"
                        ? userAnswer.QTwo
                        : userAnswer.QThree
                  }
                  onOptionChosen={handleAnswers}
                />
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 flex justify-center">
              <button
                type="button"
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-hotline"
                disabled={!isFormFulfilled}
                onClick={handleFormSubmit}
              >
                看分類結果
              </button>
            </div>
          </div>
        ) : (
          <AnswerCard totalScore={totalScore} onTestAgain={handleReTest} />
        )}
      </div>
    </div>
  );
}
