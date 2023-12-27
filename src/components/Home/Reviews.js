import React, { Component } from "react";
import Slider from "react-slick";
import rating from "../../assets/rating.svg";
import Image from "next/image";
import TeamMember1 from "../../assets/team-member-1.svg";
import TeamMember2 from "../../assets/team-member-2.svg";
import TeamMember3 from "../../assets/team-member-3.svg";
import TeamMember4 from "../../assets/team-member-4.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "../../shared/Review";

const reviews = [
  {
    id: 1,
    image: TeamMember1,
    reviews: 5,
    name: "Alfredo Gouse",
    message:
      "Lorem ipsum dolor sit amet consectetur Sodales ornare duis nunc est feugiat erat venenatis urna ac. ",
  },
  {
    id: 2,
    image: TeamMember2,
    reviews: 4,
    name: "Alfredo Gouse",
    message:
      "Lorem ipsum dolor sit amet consectetur Sodales ornare duis nunc est feugiat erat venenatis urna ac. ",
  },
  {
    id: 3,
    image: TeamMember3,
    reviews: 5,
    name: "Alfredo Gouse",
    message:
      "Lorem ipsum dolor sit amet consectetur Sodales ornare duis nunc est feugiat erat venenatis urna ac. ",
  },
  {
    id: 4,
    image: TeamMember4,
    reviews: 5,
    name: "Alfredo Gouse",
    message:
      "Lorem ipsum dolor sit amet consectetur Sodales ornare duis nunc est feugiat erat venenatis urna ac. ",
  },
  {
    id: 5,
    image: TeamMember1,
    reviews: 4,
    name: "Alfredo Gouse",
    message:
      "Lorem ipsum dolor sit amet consectetur Sodales ornare duis nunc est feugiat erat venenatis urna ac. ",
  },
  {
    id: 6,
    image: TeamMember2,
    reviews: 5,
    name: "Alfredo Gouse",
    message:
      "Lorem ipsum dolor sit amet consectetur Sodales ornare duis nunc est feugiat erat venenatis urna ac. ",
  },
  {
    id: 7,
    image: TeamMember3,
    reviews: 4,
    name: "Alfredo Gouse",
    message:
      "Lorem ipsum dolor sit amet consectetur Sodales ornare duis nunc est feugiat erat venenatis urna ac. ",
  },
  {
    id: 8,
    image: TeamMember4,
    reviews: 5,
    name: "Alfredo Gouse",
    message:
      "Lorem ipsum dolor sit amet consectetur Sodales ornare duis nunc est feugiat erat venenatis urna ac. ",
  },
  {
    id: 9,
    image: TeamMember1,
    reviews: 4,
    name: "Alfredo Gouse",
    message:
      "Lorem ipsum dolor sit amet consectetur Sodales ornare duis nunc est feugiat erat venenatis urna ac. ",
  },
  {
    id: 10,
    image: TeamMember2,
    reviews: 4,
    name: "Alfredo Gouse",
    message:
      "Lorem ipsum dolor sit amet consectetur Sodales ornare duis nunc est feugiat erat venenatis urna ac. ",
  },
  {
    id: 11,
    image: TeamMember3,
    reviews: 3,
    name: "Alfredo Gouse",
    message:
      "Lorem ipsum dolor sit amet consectetur Sodales ornare duis nunc est feugiat erat venenatis urna ac. ",
  },
  {
    id: 12,
    image: TeamMember4,
    reviews: 5,
    name: "Alfredo Gouse",
    message:
      "Lorem ipsum dolor sit amet consectetur Sodales ornare duis nunc est feugiat erat venenatis urna ac. ",
  },
];

export default class Reviews extends Component {
  render() {
    var settings = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      arrows: false,
      dotsClass: "slick-dots slick-dots-custom",
      className: "h-100",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="container-custom pb-[88px]">
          <div className="flex flex-col gap-[89px] items-center pb-[100px]">
            <div className="text-center px-5">
              <h1 className="text-[#000] lg:text-[45px] lg:leading-[46px] text-[35px] leading-[36px]  font-[700]  mb-[22px] transition-all">
                What our
                <span className="text-[#79AA00]"> Users Says</span>
              </h1>
              <p className="text-[#747474] text-[18px] font-[500] leading-[100%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
          </div>
          <Slider {...settings}>
            {reviews.map((review, index) => {
              return (
                <div key={index}>
                  <div className="min-h-[400px] flex items-end ">
                    <div className="flex flex-col gap-[15px] items-center justify-end text-center h-full min-h-[320px] border-b-[4px] border-[#29542A] relative p-[40px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] pt-12">
                      <Image
                        src={review.image}
                        alt="rating"
                        className="rounded-full absolute -top-[75px] z-10 max-w-[150px]"
                      />
                      <p className="text-[#1E252B] text-[18px] font-[700] leading-[100%]">
                        {review.name}
                      </p>
                      <p className="text-[#777] text-[14px] font-[400] leading-[18px]">
                        {review.message}
                      </p>
                      <Review review={review.reviews} />
                      {/* <Image src={rating} alt="rating" className="mt-4" /> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </>
    );
  }
}
