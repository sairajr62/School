import React from "react";

function caraousel() {
  return (
    <>
    <div>
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://media.istockphoto.com/id/1756562035/photo/university-campus.webp?b=1&s=612x612&w=0&k=20&c=eYp4ofTCOKDhnCLgF7UpH-ksyLL5H0GNkJXo-tI9M-E="
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://th.bing.com/th/id/OIP.wGMsoY-vrfY335uMPHZfqwHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://media.istockphoto.com/id/1059427664/photo/the-group-of-kids-of-different-ages-boys-and-girls-working-in-the-engineering-laboratory.jpg?s=612x612&w=0&k=20&c=DM4j6cNUSVOjjEbfg9a-uF77Lb-qVN_q-RAFWFIDKCw="
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-G930lI0m6IfArX42hiyGBWn92QHT0VG-Q&s"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
    </>
  );
}

export default caraousel;
