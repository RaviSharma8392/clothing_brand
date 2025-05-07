export const StepsCreating = () => {
  const steps = [
    {
      title: "Consultation",
      img: "https://www.kenthaste.co.uk/wp-content/uploads/2024/01/aspect-1.jpg",
      desc: "We work with you to pinpoint your needs so that together we can select the best fabric and garment styling details for your requirements.",
    },
    {
      title: "Measurements",
      img: "https://www.kenthaste.co.uk/wp-content/uploads/2024/01/aspect-2.jpg",
      desc: "We record all of your measurements while we cast a keen eye over your figuration and posture to make certain that your pattern compliments your figure.",
    },
    {
      title: "Drafting, cutting and hand work",
      img: "https://www.kenthaste.co.uk/wp-content/uploads/2024/01/drafting-cutting-and-hand-work-768x768.jpg.webp",
      desc: "After creating your very own bespoke pattern... we strike the pieces onto cloth and cut them to give to our longtime, London-based coat and trouser makers.",
    },
    {
      title: "First fitting",
      img: "https://www.kenthaste.co.uk/wp-content/uploads/2024/01/aspect-4.jpg",
      desc: "This is what we call a “shell” fitting, it is just for us to refine adjustments to your pattern to ensure fit and balance for the next stage.",
    },
    {
      title: "Second fitting",
      img: "https://www.kenthaste.co.uk/wp-content/uploads/2024/01/aspect-5.jpg",
      desc: "Here is where you really see your garments come to life... giving you a better idea of the finished look to come.",
    },
    {
      title: "Final fitting",
      img: "https://www.kenthaste.co.uk/wp-content/uploads/2024/01/aspect-6.jpg",
      desc: "This is our opportunity to ensure that all of us are happy with your new handmade garments before you take them home.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6 bg-white text-center">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">
          <img src={step.img} alt={step.title} className="w-full h-48  mb-4" />
          <h3 className="text-xl font-serif text-blue-900 mb-1">
            {step.title}
          </h3>
          <div className="h-0.5 w-8 bg-yellow-400 mb-3"></div>
          <p className="text-sm text-gray-700 l">{step.desc}</p>
        </div>
      ))}
    </div>
  );
};
