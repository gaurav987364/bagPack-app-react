import { useState } from "react"

const mesg = [
    "hey ,learn react",
    "doing project",
    "apply for jobs"
]
const StepIncrease = () => {
    const [step,setStep] = useState(1);

    const handelBtnPrev = () => {
       if(step > 1) setStep(step - 1);
    }
    const handelBtnNext = () => {
        if(step < 3) setStep(step + 1);
    }
  return (
    <div className=" w-full h-screen bg-slate-300 p-3 ">
        <div className=" border border-black w-full h-1/3">
            <div className=" w-full h-14 flex justify-between p-2">
                <span className={`${step >=1 ? 'active': ""} border border-black rounded-full px-4 py-2`}>1</span>
                <span className={`${step >=2 ? 'active': ""} border border-black rounded-full px-4 py-2`}>2</span>
                <span className={`${step >=3 ? 'active': ""} border border-black rounded-full px-4 py-2`}>3</span>
            </div>
            <div className=" mt-2 w-full h-[10rem] flex justify-center items-center">
                <h1 className=" text-lg font-semibold">Step {step} : <strong className=" text-purple-700">{mesg[step - 1]}</strong></h1>
            </div>

            <div className=" w-full flex justify-between p-2">
                <button onClick={handelBtnPrev} className=" text-xl px-2 py-2 rounded-full border border-black bg-blue-400">Previous</button>

                <button onClick={handelBtnNext} className=" text-xl px-6 py-2 rounded-full border border-black bg-blue-400">Next</button>
            </div>
        </div>
    </div>
  )
}

export default StepIncrease