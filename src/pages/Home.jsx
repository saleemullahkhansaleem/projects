import ProjectBox from "../components/ProjectBox";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 py-4">
      <ProjectBox
        url="https://mrsaleem.vercel.app/"
        gitUrl="https://github.com/saleemullahkhansaleem/portfolio"
        title="Mr Saleem Portfolio"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. A pariatur
          officia nesciunt nam, maiores accusamus, earum ad non nisi quaerat
          quis, repellat fugiat tempora ab et reiciendis sint asperiores
          voluptatem ut vero commodi magnam! Obcaecati libero at eligendi!
          Atque voluptates itaque distinctio repellendus nisi eius veniam
          rerum, magni praesentium velit consequuntur minus recusandae debitis
          asperiores molestias, eveniet eum maiores dolorum nobis accusamus
          sint. Ullam rerum nemo velit explicabo laboriosam? Inventore aut vel
          sequi repellendus minus autem libero dolorem, qui vero, obcaecati
          doloribus. Rerum reprehenderit enim neque corrupti omnis, ipsam
          sint? Quam incidunt voluptate debitis, accusantium neque minima
          delectus ut temporibus?"
      />
      <ProjectBox
        reverse
        url="https://mrslider.vercel.app/"
        gitUrl="https://github.com/saleemullahkhansaleem/slider-vertical"
        title="Mr Slider"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. A pariatur
            officia nesciunt nam, maiores accusamus, earum ad non nisi quaerat
            quis, repellat fugiat tempora ab et reiciendis sint asperiores
            voluptatem ut vero commodi magnam! Obcaecati libero at eligendi!
            Atque voluptates itaque distinctio repellendus nisi eius veniam
            rerum, magni praesentium velit consequuntur minus recusandae debitis
            asperiores molestias, eveniet eum maiores dolorum nobis accusamus
            sint. Ullam rerum nemo velit explicabo laboriosam? Inventore aut vel
            sequi repellendus minus autem libero dolorem, qui vero, obcaecati
            doloribus. Rerum reprehenderit enim neque corrupti omnis, ipsam
            sint? Quam incidunt voluptate debitis, accusantium neque minima
            delectus ut temporibus?"
      />
      <ProjectBox
        url="http://vidamates.com/"
        gitUrl="https://github.com/syedalishah009/vida-mate-frontend"
        title="Vidamate (A freelancing platform)"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. A pariatur
            officia nesciunt nam, maiores accusamus, earum ad non nisi quaerat
            quis, repellat fugiat tempora ab et reiciendis sint asperiores
            voluptatem ut vero commodi magnam! Obcaecati libero at eligendi!
            Atque voluptates itaque distinctio repellendus nisi eius veniam
            rerum, magni praesentium velit consequuntur minus recusandae debitis
            asperiores molestias, eveniet eum maiores dolorum nobis accusamus
            sint. Ullam rerum nemo velit explicabo laboriosam? Inventore aut vel
            sequi repellendus minus autem libero dolorem, qui vero, obcaecati
            doloribus. Rerum reprehenderit enim neque corrupti omnis, ipsam
            sint? Quam incidunt voluptate debitis, accusantium neque minima
            delectus ut temporibus?"
      />
    </div>
  );
};

export default Home;
