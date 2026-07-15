import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => (
  <section className="py-12">
    <div className="mb-8 text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
        Testimonials
      </span>
      <h2 className="mt-3 text-2xl font-semibold lg:text-4xl">
        What international clients and collaborators say
      </h2>
    </div>
    <TestimonialSlider />
  </section>
);

export default Testimonials;
