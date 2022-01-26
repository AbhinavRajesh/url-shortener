import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Custom Back-half",
    description: [
      "Have your own words at the end of a link. Eg. Change ",
      <b>weee.tk/sd1q2</b>,
      " to ",
      <b>weee.tk/any</b>,
    ],
    icon: GlobeAltIcon,
  },
  {
    name: "Click monitoring",
    description:
      "Monitor the number of clicks your website has got in the past 90 days",
    icon: ScaleIcon,
  },
  {
    name: "Link management",
    description: "Build and share powerful links",
    icon: LightningBoltIcon,
  },
  {
    name: "Many more features coming soon",
    description:
      "We are working on adding many features in the coming future. So keep an eye on them",
    icon: AnnotationIcon,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-20">
            We have a variety of features to offer
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p> */}
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative max-w-lg">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
