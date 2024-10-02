import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import HeartButton from './HeartButton';

const ListingCard = ({data}) => {
  const navigate = useNavigate();
  return (
    <div
    onClick={() => navigate(`/listings/${data.id}`)}
    className="col-span-1 cursor-pointer group"
  >
    <div className="flex flex-col w-full gap-2">
      <div className="relative w-full overflow-hidden aspect-square rounded-xl">
        <img
          className="object-cover w-full h-full transition group-hover:scale-110"
          src={data.imageSrc}
          alt="Listing"
        />
        <div className="absolute top-3 right-3">
          <HeartButton listingId={data.id}  />
        </div>
      </div>
      <div className="text-lg font-semibold">
        {data?.region}, {data?.label}
      </div>
      <div className="font-light text-neutral-500">
        { data.category}
      </div>
      <div className="flex flex-row items-center gap-1">
        <div className="font-semibold">$ {data.price}</div>
        {data.reservation && <div className="font-light">night</div>}
      </div>
        <Button
          small
          label={data.actionLabel}
          onClick={data.handleCancel}
        />
    </div>
  </div>
  )
}

export default ListingCard