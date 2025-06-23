"use client";
import Image from "next/image";
import { cardPropTypes } from "../types/customTypes";
import { useRouter } from "next/navigation";

export const Card = (props: cardPropTypes) => {
  const router = useRouter();

  return (
    <div className="card">
      <div>
        <Image src={props.image} alt={props.title} width={300} height={300} />
      </div>
      <div className="description">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div>
          {props.tags.map((item) => {
            return (
              <div key={0} className="tags">
                {item}
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            router.push(props.link);
          }}
        >
          Live Demo
        </button>
      </div>
    </div>
  );
};
