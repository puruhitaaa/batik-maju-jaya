const Testimonials = () => {
  return (
    <section className="mb-20 py-10 text-gray-700 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Testimonials</h3>
        <p className="mb-6 pb-2 md:mb-12">
          Berikut adalah testimonial dari customer batik maju jaya. Testimonial
          bersifat subjektif dan tidak ditunjukkan dengan tujuan narasi yang
          melebih-lebihkan.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 text-center">
        <div className="mb-6 md:mb-0">
          <div className="flex justify-center mb-6">
            <img
              alt="testimonial-1"
              src="https://cdn.rt.emap.com/wp-content/uploads/sites/2/2018/03/23172109/HDG-par-VICTOR-SKREBNESKI_660.jpg"
              className="rounded-full shadow-lg w-24"
            />
          </div>
          <p className="text-xl my-4 text-gray-500">
            "I am deeply in love with the quality of Batik Maju Jaya."
          </p>
          <p className="italic">- Hubert de Givenchy</p>
        </div>
        <div className="mb-0">
          <div className="flex justify-center mb-6">
            <img
              alt="testimonial-2"
              src="https://yt3.ggpht.com/ytc/AKedOLTLl2YBLb5-okTHLT4zvYX4rDNQU8s_m3ck7_JS=s900-c-k-c0x00ffffff-no-rj"
              className="rounded-full shadow-lg w-24"
            />
          </div>
          <p className="text-xl my-4 text-gray-500">
            "Batik Maju Jaya adalah website yang sering saya gunakan untuk
            mendapatkan kain batik berkualitas."
          </p>
          <p className="italic">- Ivan Gunawan</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
