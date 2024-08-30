import Bike from "../../../public/Model1/Violated/bike1.png";
import Car1 from "../../../public/Model1/Violated/car1.png";
import Car2 from "../../../public/Model1/Violated/car2.png";
import Car3 from "../../../public/Model1/Violated/car3.png";
import Sample1 from "../../../public/Model1/Raw Footage/output2.mp4";
import Processed1 from "../../../public/Model1/Processed Footage/output.mp4";

// Model 2 Data
import Car1_2 from "../../../public/Model2/Violated/car1.png";
import Car2_2 from "../../../public/Model2/Violated/car2.png";
import Car3_2 from "../../../public/Model2/Violated/car3.png";
import Sample2 from "../../../public/Model2/Raw Footage/sample2.mp4";
import Processed2 from "../../../public/Model2/Raw Footage/sample2.mp4";

// Model 3 Data
import Car1_3 from "../../../public/Model3/Violated/img1.png";
import Sample3 from "../../../public/Model3/Raw Footage/test1.mp4";
import Processed3 from "../../../public/Model3/Processed Footage/test1.mp4";

//Model 4 Data
import Bike1_4 from "../../../public/Model4/Violated/bike1.jpg";
import Bike2_4 from "../../../public/Model4/Violated/bike2.jpg";
import Sample4 from "../../../public/Model4/Raw Footage/helmet.avi";
import Processed4 from "../../../public/Model4/Processed Footage/helmet.avi";

//Model 5 Data
import Bus1_5 from "../../../public/Model5/Violated/Bus1.png";
import Sample5 from "../../../public/Model5/Raw Footage/output3.mp4";
import Processed5 from "../../../public/Model5/Processed Footage/lane.mp4";

const data = {
  model1: {
    title: "Speed Limit Violation Detection using Speed Estimation",
    videoHeading: "Sample Video",
    processedVideoHeading: "Processed Video",
    ssHeading: "Snapshots of violaters",
    images: [Bike, Car1, Car2, Car3],
    challanTableHeading: "Challans",
    filterTerm: "Over Speeding",
    sampleVideo: Sample1,
    processedVideo: Processed1,
    delay: 20000,
  },
  model2: {
    title: "Unauthorized Parking Detection On Road",
    videoHeading: "Sample Video",
    processedVideoHeading: "Processed Video",
    ssHeading: "Snapshots of violaters",
    images: [Car1_2, Car2_2, Car3_2],
    challanTableHeading: "Challans",
    filterTerm: "Unauthorized Parking ",
    sampleVideo: Sample2,
    processedVideo: Processed2,
    delay: 30000,
  },
  model3: {
    title: "Traffic Signal Violation Detection",
    videoHeading: "Sample Video",
    processedVideoHeading: "Processed Video",
    ssHeading: "Snapshots of violaters",
    images: [Car1_3],
    challanTableHeading: "Challans",
    filterTerm: "Traffic Signal Violated",
    sampleVideo: Sample3,
    processedVideo: Processed3,
    delay: 6000,
  },
  model4: {
    title: "Helmet Detection",
    videoHeading: "Sample Video",
    processedVideoHeading: "Processed Video",
    ssHeading: "Snapshots of violaters",
    images: [Bike1_4, Bike2_4],
    challanTableHeading: "Challans",
    filterTerm: "Helmet Violation",
    sampleVideo: Sample4,
    processedVideo: Processed4,
    delay: 4000,
  },
  model5: {
    title: "Lane Detection",
    videoHeading: "Sample Video",
    processedVideoHeading: "Processed Video",
    ssHeading: "Snapshots of violaters",
    images: [Bus1_5],
    challanTableHeading: "Challans",
    filterTerm: "Lane Violation",
    sampleVideo: Sample5,
    processedVideo: Processed5,
    delay: 6000,
  },
};

export { data };
