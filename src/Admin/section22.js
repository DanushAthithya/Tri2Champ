import React from "react";
import cycling from "../cycling.jpg";
import "./section1.css";

function Section2() {
  return (
    <div className="bg-zinc-200 border-2 border-zinc-800" style={{ height: "1000px" }}>
      <div className="para">
        <div className="text1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste
            numquam iure mollitia <br/>expedita modi error voluptatum veniam,
            dignissimos ab, pariatur perferendis deserunt odio magni ratione.
            Quaerat libero unde<br/> voluptas asperiores fuga vero. Ipsam consectetur
            sunt commodi deserunt, voluptatem sit aliquam corrupti tenetur,
            nesciunt<br/> necessitatibus dicta consequuntur consequatur ex tempora
            praesentium eveniet voluptates dolores ab beatae soluta!<br/> Nihil
            doloremque laborum officia cupiditate dicta numquam blanditiis hic
            ratione dignissimos delectus? Illo ea praesentium iusto,<br/> accusamus
            dolor qui repellendus repudiandae enim veniam maiores nisi. Id natus
            quibusdam debitis quod cupiditate dolores adipisci<br/> eius quis numquam
            repellendus quidem velit, ex hic nobis ipsa.
          </p>
        </div>
        <div className="cycle">
          <img src={cycling} style={{ height: '700px', width: '3000px' }}  />
        </div>
      </div>
    </div>
  );
}

export default Section2;
