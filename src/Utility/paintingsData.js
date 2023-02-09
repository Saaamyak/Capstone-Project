const paintings = [
    {
        id: 1,
        image: '/images/paintings/1.jpg',
        title: 'Scene of Village',
        description: 'A landscape painting of a village',
        fulldescription: 'A landscape painting of a village, which will make your room look beautiful. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum dolorem veniam velit aliquam, libero mollitia sunt quaerat rerum aspernatur iure optio, maiores nemo! Sapiente omnis, ducimus illum at similique officia obcaecati fuga magnam nulla, delectus ab voluptates ullam, officiis perferendis eaque. Dolores aliquam debitis officia tempore molestiae deleniti, inventore sint nesciunt eaque consectetur, in tempora est et pariatur. Dicta quaerat ipsum facilis dolore atque, quo recusandae sequi ab delectus porro maxime libero ipsam ut, temporibus pariatur dignissimos itaque maiores commodi ipsa velit in aut! Quidem, tempore architecto ducimus nisi error vero maxime iure asperiores quasi laborum cumque, laboriosam ut ex delectus ratione rem accusamus consequuntur, doloribus ipsa debitis iste. Suscipit recusandae voluptates totam dolore nihil nobis voluptatem. Ipsa, impedit. Incidunt non ipsam numquam eos aspernatur, expedita suscipit esse deleniti, autem dolores odio tempora blanditiis quas? Labore, laboriosam laborum odio maxime aperiam, doloremque nostrum ipsa a nulla, hic asperiores dignissimos!',
        price: 1999
    },
    {
        id: 2,
        image: '/images/paintings/11.jpg',
        title: 'The Birds',
        description: 'A painting of birds, which will make your room look gorgeous',
        fulldescription: 'A painting of birds, which will make your room look gorgeous. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum dolorem veniam velit aliquam, libero mollitia sunt quaerat rerum aspernatur iure optio, maiores nemo! Sapiente omnis, ducimus illum at similique officia obcaecati fuga magnam nulla, delectus ab voluptates ullam, officiis perferendis eaque. Dolores aliquam debitis officia tempore molestiae deleniti, inventore sint nesciunt eaque consectetur, in tempora est et pariatur. Dicta quaerat ipsum facilis dolore atque, quo recusandae sequi ab delectus porro maxime libero ipsam ut, temporibus pariatur dignissimos itaque maiores commodi ipsa velit in aut! Quidem, tempore architecto ducimus nisi error vero maxime iure asperiores quasi laborum cumque, laboriosam ut ex delectus ratione rem accusamus consequuntur, doloribus ipsa debitis iste. Suscipit recusandae voluptates totam dolore nihil nobis voluptatem. Ipsa, impedit. Incidunt non ipsam numquam eos aspernatur, expedita suscipit esse deleniti, autem dolores odio tempora blanditiis quas? Labore, laboriosam laborum odio maxime aperiam, doloremque nostrum ipsa a nulla, hic asperiores dignissimos!',
        price: 3499
    },
    {
        id: 3,
        image: '/images/paintings/3.jpg',
        title: 'Floral Art',
        description: 'A beautiful floral art piece, which will make your room look beautiful',
        fulldescription: 'A beautiful floral art piece, which will make your room look beautiful. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum dolorem veniam velit aliquam, libero mollitia sunt quaerat rerum aspernatur iure optio, maiores nemo! Sapiente omnis, ducimus illum at similique officia obcaecati fuga magnam nulla, delectus ab voluptates ullam, officiis perferendis eaque. Dolores aliquam debitis officia tempore molestiae deleniti, inventore sint nesciunt eaque consectetur, in tempora est et pariatur. Dicta quaerat ipsum facilis dolore atque, quo recusandae sequi ab delectus porro maxime libero ipsam ut, temporibus pariatur dignissimos itaque maiores commodi ipsa velit in aut! Quidem, tempore architecto ducimus nisi error vero maxime iure asperiores quasi laborum cumque, laboriosam ut ex delectus ratione rem accusamus consequuntur, doloribus ipsa debitis iste. Suscipit recusandae voluptates totam dolore nihil nobis voluptatem. Ipsa, impedit. Incidunt non ipsam numquam eos aspernatur, expedita suscipit esse deleniti, autem dolores odio tempora blanditiis quas? Labore, laboriosam laborum odio maxime aperiam, doloremque nostrum ipsa a nulla, hic asperiores dignissimos!',
        price: 3999
    },
    {
        id: 4,
        image: '/images/paintings/4.jpg',
        title: 'A flower pot painting',
        description: 'Wonderful flower pot painting, which will make your guests feel amazed',
        fulldescription: 'Wonderful flower pot painting, which will make your guests feel amazed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum dolorem veniam velit aliquam, libero mollitia sunt quaerat rerum aspernatur iure optio, maiores nemo! Sapiente omnis, ducimus illum at similique officia obcaecati fuga magnam nulla, delectus ab voluptates ullam, officiis perferendis eaque. Dolores aliquam debitis officia tempore molestiae deleniti, inventore sint nesciunt eaque consectetur, in tempora est et pariatur. Dicta quaerat ipsum facilis dolore atque, quo recusandae sequi ab delectus porro maxime libero ipsam ut, temporibus pariatur dignissimos itaque maiores commodi ipsa velit in aut! Quidem, tempore architecto ducimus nisi error vero maxime iure asperiores quasi laborum cumque, laboriosam ut ex delectus ratione rem accusamus consequuntur, doloribus ipsa debitis iste. Suscipit recusandae voluptates totam dolore nihil nobis voluptatem. Ipsa, impedit. Incidunt non ipsam numquam eos aspernatur, expedita suscipit esse deleniti, autem dolores odio tempora blanditiis quas? Labore, laboriosam laborum odio maxime aperiam, doloremque nostrum ipsa a nulla, hic asperiores dignissimos!',
        price: 4999
    },
    {
        id: 5,
        image: '/images/paintings/5.jpg',
        title: 'Basket of fruits',
        description: 'A astonishing painting of fruits in a basket',
        fulldescription: 'A astonishing painting of fruits in a basket. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum dolorem veniam velit aliquam, libero mollitia sunt quaerat rerum aspernatur iure optio, maiores nemo! Sapiente omnis, ducimus illum at similique officia obcaecati fuga magnam nulla, delectus ab voluptates ullam, officiis perferendis eaque. Dolores aliquam debitis officia tempore molestiae deleniti, inventore sint nesciunt eaque consectetur, in tempora est et pariatur. Dicta quaerat ipsum facilis dolore atque, quo recusandae sequi ab delectus porro maxime libero ipsam ut, temporibus pariatur dignissimos itaque maiores commodi ipsa velit in aut! Quidem, tempore architecto ducimus nisi error vero maxime iure asperiores quasi laborum cumque, laboriosam ut ex delectus ratione rem accusamus consequuntur, doloribus ipsa debitis iste. Suscipit recusandae voluptates totam dolore nihil nobis voluptatem. Ipsa, impedit. Incidunt non ipsam numquam eos aspernatur, expedita suscipit esse deleniti, autem dolores odio tempora blanditiis quas? Labore, laboriosam laborum odio maxime aperiam, doloremque nostrum ipsa a nulla, hic asperiores dignissimos!',
        price: 2499

    },
    {
        id: 6,
        image: '/images/paintings/6.jpg',
        title: 'Farmers at work',
        description: 'A painting of farmers at work, the painting will make you feel nostalgic',
        fulldescription: 'A painting of farmers at work, the painting will make you feel nostalgic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum dolorem veniam velit aliquam, libero mollitia sunt quaerat rerum aspernatur iure optio, maiores nemo! Sapiente omnis, ducimus illum at similique officia obcaecati fuga magnam nulla, delectus ab voluptates ullam, officiis perferendis eaque. Dolores aliquam debitis officia tempore molestiae deleniti, inventore sint nesciunt eaque consectetur, in tempora est et pariatur. Dicta quaerat ipsum facilis dolore atque, quo recusandae sequi ab delectus porro maxime libero ipsam ut, temporibus pariatur dignissimos itaque maiores commodi ipsa velit in aut! Quidem, tempore architecto ducimus nisi error vero maxime iure asperiores quasi laborum cumque, laboriosam ut ex delectus ratione rem accusamus consequuntur, doloribus ipsa debitis iste. Suscipit recusandae voluptates totam dolore nihil nobis voluptatem. Ipsa, impedit. Incidunt non ipsam numquam eos aspernatur, expedita suscipit esse deleniti, autem dolores odio tempora blanditiis quas? Labore, laboriosam laborum odio maxime aperiam, doloremque nostrum ipsa a nulla, hic asperiores dignissimos!',
        price: 3449
    },
    {
        id: 7,
        image: '/images/paintings/7.jpg',
        title: 'Lake view',
        description: 'A beautiful painting of a lake view, which will make your room look beautiful',
        fulldescription: 'A beautiful painting of a lake view, which will make your room look beautiful. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum dolorem veniam velit aliquam, libero mollitia sunt quaerat rerum aspernatur iure optio, maiores nemo! Sapiente omnis, ducimus illum at similique officia obcaecati fuga magnam nulla, delectus ab voluptates ullam, officiis perferendis eaque. Dolores aliquam debitis officia tempore molestiae deleniti, inventore sint nesciunt eaque consectetur, in tempora est et pariatur. Dicta quaerat ipsum facilis dolore atque, quo recusandae sequi ab delectus porro maxime libero ipsam ut, temporibus pariatur dignissimos itaque maiores commodi ipsa velit in aut! Quidem, tempore architecto ducimus nisi error vero maxime iure asperiores quasi laborum cumque, laboriosam ut ex delectus ratione rem accusamus consequuntur, doloribus ipsa debitis iste. Suscipit recusandae voluptates totam dolore nihil nobis voluptatem. Ipsa, impedit. Incidunt non ipsam numquam eos aspernatur, expedita suscipit esse deleniti, autem dolores odio tempora blanditiis quas? Labore, laboriosam laborum odio maxime aperiam, doloremque nostrum ipsa a nulla, hic asperiores dignissimos!',
        price: 2499
    },
    {
        id: 8,
        image: '/images/paintings/8.jpg',
        title: 'Battle ships',
        description: 'Battle ships painting',
        fulldescription: 'Battle ships painting. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum dolorem veniam velit aliquam, libero mollitia sunt quaerat rerum aspernatur iure optio, maiores nemo! Sapiente omnis, ducimus illum at similique officia obcaecati fuga magnam nulla, delectus ab voluptates ullam, officiis perferendis eaque. Dolores aliquam debitis officia tempore molestiae deleniti, inventore sint nesciunt eaque consectetur, in tempora est et pariatur. Dicta quaerat ipsum facilis dolore atque, quo recusandae sequi ab delectus porro maxime libero ipsam ut, temporibus pariatur dignissimos itaque maiores commodi ipsa velit in aut! Quidem, tempore architecto ducimus nisi error vero maxime iure asperiores quasi laborum cumque, laboriosam ut ex delectus ratione rem accusamus consequuntur, doloribus ipsa debitis iste. Suscipit recusandae voluptates totam dolore nihil nobis voluptatem. Ipsa, impedit. Incidunt non ipsam numquam eos aspernatur, expedita suscipit esse deleniti, autem dolores odio tempora blanditiis quas? Labore, laboriosam laborum odio maxime aperiam, doloremque nostrum ipsa a nulla, hic asperiores dignissimos!',
        price: 1999
    },
    {
        id: 9,
        image: '/images/paintings/9.jpg',
        title: 'Girl in the garden',
        description: 'Girl sitting in the garden painting, a stress buster painting for your room',
        fulldescription: 'Girl sitting in the garden painting, a stress buster painting for your room. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum dolorem veniam velit aliquam, libero mollitia sunt quaerat rerum aspernatur iure optio, maiores nemo! Sapiente omnis, ducimus illum at similique officia obcaecati fuga magnam nulla, delectus ab voluptates ullam, officiis perferendis eaque. Dolores aliquam debitis officia tempore molestiae deleniti, inventore sint nesciunt eaque consectetur, in tempora est et pariatur. Dicta quaerat ipsum facilis dolore atque, quo recusandae sequi ab delectus porro maxime libero ipsam ut, temporibus pariatur dignissimos itaque maiores commodi ipsa velit in aut! Quidem, tempore architecto ducimus nisi error vero maxime iure asperiores quasi laborum cumque, laboriosam ut ex delectus ratione rem accusamus consequuntur, doloribus ipsa debitis iste. Suscipit recusandae voluptates totam dolore nihil nobis voluptatem. Ipsa, impedit. Incidunt non ipsam numquam eos aspernatur, expedita suscipit esse deleniti, autem dolores odio tempora blanditiis quas? Labore, laboriosam laborum odio maxime aperiam, doloremque nostrum ipsa a nulla, hic asperiores dignissimos!',
        price: 1599
    },
    {
        id: 10,
        image: '/images/paintings/10.jpg',
        title: 'Ancient art',
        description: 'The rare painting of ancient art, which will make your home look beautiful',
        fulldescription: 'The rare painting of ancient art, which will make your home look beautiful. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum dolorem veniam velit aliquam, libero mollitia sunt quaerat rerum aspernatur iure optio, maiores nemo! Sapiente omnis, ducimus illum at similique officia obcaecati fuga magnam nulla, delectus ab voluptates ullam, officiis perferendis eaque. Dolores aliquam debitis officia tempore molestiae deleniti, inventore sint nesciunt eaque consectetur, in tempora est et pariatur. Dicta quaerat ipsum facilis dolore atque, quo recusandae sequi ab delectus porro maxime libero ipsam ut, temporibus pariatur dignissimos itaque maiores commodi ipsa velit in aut! Quidem, tempore architecto ducimus nisi error vero maxime iure asperiores quasi laborum cumque, laboriosam ut ex delectus ratione rem accusamus consequuntur, doloribus ipsa debitis iste. Suscipit recusandae voluptates totam dolore nihil nobis voluptatem. Ipsa, impedit. Incidunt non ipsam numquam eos aspernatur, expedita suscipit esse deleniti, autem dolores odio tempora blanditiis quas? Labore, laboriosam laborum odio maxime aperiam, doloremque nostrum ipsa a nulla, hic asperiores dignissimos!',
        price: 8999
    },
    {
        id: 11,
        image: '/images/paintings/2.jpg',
        title: 'An evening in the town',
        description: 'Beautiful scenery of a town in the evening',
        fulldescription: 'Beautiful scenery of a town in the evening. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum dolorem veniam velit aliquam, libero mollitia sunt quaerat rerum aspernatur iure optio, maiores nemo! Sapiente omnis, ducimus illum at similique officia obcaecati fuga magnam nulla, delectus ab voluptates ullam, officiis perferendis eaque. Dolores aliquam debitis officia tempore molestiae deleniti, inventore sint nesciunt eaque consectetur, in tempora est et pariatur. Dicta quaerat ipsum facilis dolore atque, quo recusandae sequi ab delectus porro maxime libero ipsam ut, temporibus pariatur dignissimos itaque maiores commodi ipsa velit in aut! Quidem, tempore architecto ducimus nisi error vero maxime iure asperiores quasi laborum cumque, laboriosam ut ex delectus ratione rem accusamus consequuntur, doloribus ipsa debitis iste. Suscipit recusandae voluptates totam dolore nihil nobis voluptatem. Ipsa, impedit. Incidunt non ipsam numquam eos aspernatur, expedita suscipit esse deleniti, autem dolores odio tempora blanditiis quas? Labore, laboriosam laborum odio maxime aperiam, doloremque nostrum ipsa a nulla, hic asperiores dignissimos!',
        price: 2499
    },
    {
        id: 12,
        image: '/images/paintings/12.jpg',
        title: 'A village in mountains',
        description: 'A painting of a village in mountains, which will make your room look beautiful',
        fulldescription: 'A painting of a village in mountains, which will make your room look beautiful. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum dolorem veniam velit aliquam, libero mollitia sunt quaerat rerum aspernatur iure optio, maiores nemo! Sapiente omnis, ducimus illum at similique officia obcaecati fuga magnam nulla, delectus ab voluptates ullam, officiis perferendis eaque. Dolores aliquam debitis officia tempore molestiae deleniti, inventore sint nesciunt eaque consectetur, in tempora est et pariatur. Dicta quaerat ipsum facilis dolore atque, quo recusandae sequi ab delectus porro maxime libero ipsam ut, temporibus pariatur dignissimos itaque maiores commodi ipsa velit in aut! Quidem, tempore architecto ducimus nisi error vero maxime iure asperiores quasi laborum cumque, laboriosam ut ex delectus ratione rem accusamus consequuntur, doloribus ipsa debitis iste. Suscipit recusandae voluptates totam dolore nihil nobis voluptatem. Ipsa, impedit. Incidunt non ipsam numquam eos aspernatur, expedita suscipit esse deleniti, autem dolores odio tempora blanditiis quas? Labore, laboriosam laborum odio maxime aperiam, doloremque nostrum ipsa a nulla, hic asperiores dignissimos!',
        price: 3499
    }
];
export default paintings;