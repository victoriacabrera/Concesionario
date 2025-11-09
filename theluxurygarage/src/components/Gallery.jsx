import React from "react";
import { Link } from "react-router-dom";

const cars = [
  { id: 1, title: "BMW X6", href: "/x6", class: "image-1" },
  { id: 2, title: "BMW M240i xDrive Coupé", href: "/m240i", class: "image-2" },
  { id: 3, title: "BMW M3 Competition", href: "/m3", class: "image-3" },
  { id: 4, title: "BMW X6 M", href: "/x6m", class: "image-4" },
  { id: 5, title: "BMW Serie 4 Coupé", href: "/serie4", class: "image-5" },
  { id: 6, title: "BMW Z4 Roadster", href: "/z4", class: "image-6" },
];

export default function Gallery() {
  return (
    <>
      {cars.map((car) => (
        <React.Fragment key={car.id}>
          <Link to={car.href} className="gallery-link">
            <div className={"gallery-image ${car.class}"}>
              <div className="image-overlay"></div>
              <div className="image-content">
                <div className="image-text">Ver detalles</div>
              </div>
            </div>
          </Link>
          <div className={"image-title title-${car.id}"}>{car.title}</div>
        </React.Fragment>
      ))}

      <div className="decorative-line line-1"></div>
      <div className="decorative-line line-2"></div>
      <div className="decorative-line line-3"></div>
    </>
  );
}
