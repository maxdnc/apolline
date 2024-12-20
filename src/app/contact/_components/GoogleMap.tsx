const GoogleMap = () => {
  return (
    <div className=" rounded overflow-hidden lg:w-2/3 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.47436071203!2d1.6027155300048064!3d50.723761064921895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc2c40b157a363%3A0x40af13e8163fb30!2s62200%20Boulogne-sur-Mer%2C%20France!5e0!3m2!1sfr!2sgr!4v1734616710271!5m2!1sfr!2sgr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default GoogleMap;
