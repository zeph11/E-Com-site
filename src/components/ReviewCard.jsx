import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, feedback, rating, customerName }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt="customers" className="rounded-full object-cover w-[120px] h-[120px]" />
            <div className="mt-6 max-w-sm text-center info-text">{feedback}</div>
            <div className="mt-3 flex justify-center items-center gap-2.5"><img src={star} width={24} height={24} className="object-contain m-0"/> <p className="text-xl font-montserrattext-slate-gray"> {rating}</p></div>
            <div className="mt-1 font-palanquin text-xl text-cetner font-bold" > {customerName}</div>
        </div>
    )
}

export default ReviewCard
