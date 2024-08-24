const InfoCard = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl mb-2">A brief Intro about our Project</h2>
      <p className="">
        The Traffic Rule Violation System is an advanced computer vision-based
        solution designed to enhance road safety by automatically detecting and
        reporting various types of traffic violations. This comprehensive system
        integrates multiple modules, each focused on a specific type of
        violation, including lane line violations, speed violations, parking
        violations, traffic signal violations, and helmet violations. By
        leveraging state-of-the-art deep learning and image processing
        techniques, the system aims to promote safer driving behaviors and
        assist law enforcement in maintaining traffic order effectively.
      </p>
      <h3 className="text-2xl">
        Features of the Traffic Rule Violation System
      </h3>
      <p>
        <span className="font-bold">Lane Line Violation Detection:</span> This
        module identifies vehicles that stray out of their designated lanes
        without proper signaling or in areas where lane changes are prohibited.
        It helps in reducing accidents caused by careless or reckless lane
        changes.
      </p>
      <p>
        <span className="font-bold">Speed Violation Detection:</span> By
        analyzing the movement of vehicles over time, this module accurately
        measures their speed and detects those exceeding the posted speed
        limits. This feature is crucial for deterring speeding and preventing
        potential accidents.
      </p>
      <p>
        <span className="font-bold">Parking Violation Detection:</span> This
        component monitors areas where parking is restricted, such as no-parking
        zones, bus stops, and fire hydrants. It detects illegally parked
        vehicles and logs violations to ensure that parking rules are followed.
      </p>
      <p>
        <span className="font-bold">Traffic Signal Violation Detection:</span>
        The system captures and analyzes real-time video footage at
        intersections to detect vehicles running red lights. This helps in
        minimizing the risks associated with signal violations, which are a
        major cause of urban traffic accidents.
      </p>
      <p>
        <span className="font-bold">Helmet Violation Detection:</span> Focused
        on the safety of two-wheeler riders, this module detects whether the
        rider and pillion are wearing helmets as mandated by traffic
        regulations. This feature promotes helmet usage, which significantly
        reduces the severity of injuries in accidents involving motorcycles.
        changes.
      </p>
      <p>
        The Traffic Rule Violation System is a versatile and scalable solution
        that can be deployed in various environments, from city intersections to
        highways and urban streets. By automating the detection of traffic
        violations, it aids in enforcing traffic laws more effectively, enhances
        public safety, and reduces the need for manual monitoring, making it an
        invaluable tool for modern traffic management systems.
      </p>
    </div>
  );
};

export default InfoCard;
