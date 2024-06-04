import Header from "./components/Header";
import Footer from "./components/Footer";

function About() {
    return (
        <>
            <Header />
            <section className="mx-20 mt-5 max-md:mx-5">
                <div className="flex flex-row justify-evenly mt-10">
                    <div className="basis-2/3 mr-10 max-md:mr-0">
                        <h2 className="text-xl font-bold">Our goal</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quaerat consequuntur blanditiis labore esse est recusandae obcaecati neque laborum amet, fugiat architecto enim suscipit ab aliquid illo corrupti tenetur minus animi veritatis fuga, itaque rerum accusamus? Ad, eligendi vitae, sequi rerum obcaecati dolor fugiat nostrum esse quasi architecto, labore autem?
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odio non dolorum voluptatem dolor, iusto error? Qui nulla eius adipisci labore quaerat quae voluptatum optio officiis facilis inventore doloribus fuga sunt praesentium laboriosam quos quas rem porro similique sed, aliquid, ipsam nobis, quia ullam voluptate. Quibusdam, ea necessitatibus perferendis hic, sapiente similique libero modi est, unde odio aspernatur et molestiae non? Facilis sunt nostrum voluptates eius.
                        </p>
                    </div>
                    <div className="basis-1/3 max-md:hidden">
                        <img src="src\assets\image-solid.svg" alt="place holder image" className="max-w-md" />
                    </div>
                </div>
                <div className="flex flex-row-reverse justify-evenly mt-10">
                    <div className="basis-2/3 ml-10 max-md:ml-0">
                        <h2 className="text-xl font-bold">Our Past</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim non inventore maxime nobis ratione quaerat autem, at possimus facere impedit dolore quam accusantium error et, ab excepturi, dolor velit explicabo accusamus corporis blanditiis quasi! Cum labore alias iusto veritatis sed iste aliquam atque aliquid modi maxime nemo, optio quidem adipisci odio omnis distinctio, repellendus totam exercitationem hic molestiae qui praesentium incidunt. Amet maxime accusantium autem cumque doloribus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugiat perferendis voluptatibus reprehenderit exercitationem eius nulla! Deserunt, fuga expedita odit facere quibusdam explicabo veritatis magnam, repudiandae ducimus officia optio repellat sunt in neque quae dignissimos maiores enim doloremque eos illo sit eveniet earum, consequuntur assumenda! Tempore in aspernatur doloribus distinctio ipsam, similique minus? Ad doloribus commodi laudantium! Nobis, harum.
                        </p>
                    </div>
                    <div className="basis-1/3 max-md:hidden">
                        <img src="src\assets\image-solid.svg" alt="place holder image" className="max-w-md" />
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default About