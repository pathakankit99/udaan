function Section() {
    return (
        <section className="p-4 pb-16 pt-32 lg:px-32">
            <h3 className="text-3xl heading font-bold mb-6">Development work at Utsav Residential</h3>
            <div className="grid-wrapper pt-16 lg:pt-0">
            {
                PHOTOS.map((item)=>(
                    <div key={item.photo} className="big">
                        <img src={item.photo} />
                    </div>
                ))
            }
            </div>
        </section>
    );
}

export default Section;

const PHOTOS = [
    {
      photo: '/images/utsav/img.jpeg',
    },
    {
      photo: '/images/utsav/img2.jpeg',
    },
    {
        photo: '/images/utsav/img3.jpeg',
      },
      {
        photo: '/images/utsav/img4.jpeg',
      },
      {
        photo: '/images/utsav/img5.jpeg',
      },
      {
        photo: '/images/utsav/img6.jpeg',
      },
      {
        photo: '/images/utsav/img7.jpeg',
      },
  ];