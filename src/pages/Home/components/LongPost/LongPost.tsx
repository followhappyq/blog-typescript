import React from "react"
import { Link } from "react-router-dom"
import { Image } from "semantic-ui-react"
import { format } from "date-fns"

import "./longPost.scss"

interface Props {}

const LongPost = (props: Props) => {
  return (
    <div className="post">
      <div className="post__title">
        <Link to="/" className="post__link">
          Hire me
        </Link>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1587486520366-a52810770560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        alt="image-description"
      />
      <div className="post__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque harum odit eligendi nobis quibusdam accusamus
        itaque quos vitae ratione earum quas, quis laborum perspiciatis placeat laudantium impedit autem qui natus.
        Maxime dignissimos deleniti laboriosam provident molestiae! Ducimus illo hic iusto doloribus suscipit id,
        mollitia odio atque et, officiis incidunt, nostrum eligendi quae. Eius dolorum excepturi saepe sint quisquam
        consequuntur quam. Cupiditate perferendis aperiam odit minus rem excepturi nostrum asperiores est. Explicabo,
        hic exercitationem eos inventore culpa sint molestiae nobis incidunt officiis deleniti nesciunt. At numquam
        recusandae labore, cumque inventore ratione. Rerum delectus eveniet expedita voluptate asperiores temporibus
        fuga esse inventore repudiandae eum, animi, architecto quae. Velit autem veritatis sapiente aperiam iste
        voluptatum assumenda debitis doloribus animi soluta, nostrum blanditiis quisquam? Ab debitis voluptatibus harum
        aperiam nihil provident, exercitationem tenetur est quam quae, autem assumenda, iure consequatur repudiandae
        quas voluptas accusantium minus suscipit distinctio. Ducimus magni unde culpa fugiat recusandae id? Laudantium
        repellendus aperiam nam a soluta, unde in dignissimos excepturi exercitationem enim, deserunt laboriosam dolorem
        quas minus dolore ad? Officia doloremque hic, ipsum cupiditate velit aperiam fugit officiis ex amet? Dignissimos
        ut facilis molestias autem sapiente fugiat accusamus totam itaque? Incidunt asperiores cumque sed, amet
        repellendus dolorum, doloremque similique ipsa saepe iste minima qui recusandae, quisquam nobis ut esse dolore?
        Molestias nostrum eum iusto perferendis rerum error ut soluta optio minima expedita nobis repellat, modi
        accusantium totam dolores libero est earum laudantium facere neque. Consectetur sapiente quia vitae cumque
        commodi! Nostrum vero minus itaque molestias sequi necessitatibus laborum animi culpa aut, quae iste commodi
        distinctio maiores! Et ducimus quasi officia doloremque nobis quaerat necessitatibus adipisci, delectus dicta
        quis non voluptate? Quod ratione culpa adipisci a voluptates molestiae nostrum veritatis praesentium
        necessitatibus illo iusto cumque perferendis suscipit porro, est velit nisi ex sunt eligendi aut quidem
        architecto laboriosam. Eum, saepe aut?
      </div>
      <div className="post__footer">
        <div className="post__author">
          <Link to="/" className="post__link">
            HappyQ
          </Link>
          <div className="post__time">{format(new Date(), "yyyy-MM-dd HH:mm")}</div>
        </div>
        <div className="post__description">
          <div className="post__count">0 comments</div>
          <div className="post__continue">
            <Link to="/" className="post__link">
              Continue...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LongPost
