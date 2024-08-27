import { Link } from "react-router-dom";
const ModelList = () => {
  return (
    <div className="max-w-xl mx-auto mt-8 flex flex-col gap-4">
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium ">
          <h2>Speed Limit Violation Detection using Speed Estimation</h2>
        </div>
        <div className="collapse-content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            reiciendis, quas esse maiores corrupti eligendi est voluptatibus,
            unde, corporis repellendus aliquam impedit. Officia nesciunt soluta
            odio quaerat debitis minima quod. Sequi voluptatibus accusantium in
            quod ex eaque corrupti iure rerum. Odit, quisquam ipsam natus, vero
            tenetur aut minima eligendi suscipit quos deleniti quod molestiae
            qui eaque expedita illo est incidunt!
          </p>
          <div className="flex items-center justify-center">
            <Link to="/model1" className="btn mt-4 btn-primary">
              See Working
            </Link>
          </div>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium ">
          <h2>Unauthorized Parking Detection On Road</h2>
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            doloribus voluptatibus deleniti assumenda saepe accusantium
            veritatis facere nemo magnam a eos commodi eaque aliquam, ab
            explicabo quibusdam voluptas error adipisci?
          </p>
          <div className="flex items-center justify-center">
            <Link to="/model2" className="btn mt-4 btn-primary">
              See Working
            </Link>
          </div>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium ">
          <h2>Traffic Signal Violation Detection</h2>
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            veniam animi consequatur neque fuga sunt ducimus enim sit? Ducimus,
            aperiam quisquam nihil dolorum sequi dicta quis eos nostrum amet
            numquam.
          </p>
          <div className="flex items-center justify-center">
            <Link to="/model3" className="btn mt-4 btn-primary">
              See Working
            </Link>
          </div>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium ">
          <h2>Helmet Detection</h2>
        </div>
        <div className="collapse-content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus ratione sint, quo officiis cupiditate omnis assumenda
            eligendi. Ut eos fugiat esse illum modi, quisquam consequuntur
            necessitatibus ullam! Modi, beatae amet!
          </p>
          <div className="flex items-center justify-center">
            <Link to="/model4" className="btn mt-4 btn-primary">
              See Working
            </Link>
          </div>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium ">
          <h2>Lane Detection</h2>
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ea
            odit, porro aut fuga ad nemo, modi explicabo assumenda fugit
            doloribus eligendi exercitationem in laboriosam asperiores officia
            culpa ratione dignissimos.
          </p>
          <div className="flex items-center justify-center">
            <Link to="/model5" className="btn mt-4 btn-primary">
              See Working
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelList;
