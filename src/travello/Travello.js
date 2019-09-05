import React from 'react'
import styles from './Travello.module.scss'
import logo from './img/logo.png'
import sprite_path from './img/sprite.svg'
import user1c from './img/user-1c.jpg'
import hotel1 from './img/hotel-1.jpg'
import hotel2 from './img/hotel-2.jpg'
import hotel3 from './img/hotel-3.jpg'
import user6 from './img/user-6.jpg'
import user5 from './img/user-5.jpg'
import user4 from './img/user-4.jpg'
import user3 from './img/user-3.jpg'
import user2 from './img/user-2.jpg'
import user1 from './img/user-1.jpg'

function Travello() {
	function handleClick(e) {
		e.preventDefault()
	}
	return (
		<div className={styles.travello}>
			<div className={styles.container}>
				<header className={styles.header}>
					<img src={logo} alt="travello logo" className={styles.logo} />
					<form action="#" className={styles.search}>
						<input type="text" className={styles.search__input} placeholder="Search hotels" />
						<button className={styles.search__button} onClick={handleClick}>
							<svg className={styles.search__icon}>
								<use xlinkHref={`${sprite_path}#icon-magnifying-glass`} />
							</svg>
						</button>
					</form>

					<nav className={styles.user_nav}>
						<div className={styles.user_nav__icon_box}>
							<svg className={styles.user_nav__icon}>
								<use xlinkHref={`${sprite_path}#icon-bookmark`} />
							</svg>
							<span className={styles.user_nav__notification}>7</span>
						</div>
						<div className={styles.user_nav__icon_box}>
							<svg className={styles.user_nav__icon}>
								<use xlinkHref={`${sprite_path}#icon-chat`} />
							</svg>
							<span className={styles.user_nav__notification}>13</span>
						</div>
						<div className={styles.user_nav__user}>
							<img src={user1c} alt="User 1c" className={styles.user_nav__user_photo} />
							<span className={styles.user_nav__user_name}>Callum</span>
						</div>
					</nav>
				</header>

				<div className={styles.content}>
					<nav className={styles.sidebar}>
						<ul className={styles.sideNav}>
							<li className={`${styles.sideNav__item} ${styles.sideNav__itemActive}`}>
								<a href="./" className={styles.sideNav__link} onClick={handleClick}>
									<svg className={styles.sideNav__icon}>
										<use xlinkHref={`${sprite_path}#icon-home`} />
									</svg>
									<span>Hotel</span>
								</a>
							</li>
							<li className={styles.sideNav__item}>
								<a href="./" className={styles.sideNav__link} onClick={handleClick}>
									<svg className={styles.sideNav__icon}>
										<use xlinkHref={`${sprite_path}#icon-aircraft-take-off`} />
									</svg>
									<span>Flight</span>
								</a>
							</li>
							<li className={styles.sideNav__item}>
								<a href="./" className={styles.sideNav__link} onClick={handleClick}>
									<svg className={styles.sideNav__icon}>
										<use xlinkHref={`${sprite_path}#icon-key`} />
									</svg>
									<span>Car Rental</span>
								</a>
							</li>
							<li className={styles.sideNav__item}>
								<a href="./" className={styles.sideNav__link} onClick={handleClick}>
									<svg className={styles.sideNav__icon}>
										<use xlinkHref={`${sprite_path}#icon-map`} />
									</svg>
									<span>Tours</span>
								</a>
							</li>
						</ul>

						<div className={styles.legal}>&copy; 2019 by travello. All rights reserved.</div>
					</nav>
					<main className={styles.hotel_view}>
						<div className={styles.gallery}>
							<figure className={styles.gallery__item}>
								<img src={hotel2} alt="Hotel 2" className={styles.gallery__photo} />
							</figure>
							<figure className={styles.gallery__item}>
								<img src={hotel3} alt="Hotel 3" className={styles.gallery__photo} />
							</figure>
							<figure className={styles.gallery__item}>
								<img src={hotel1} alt="Hotel 1" className={styles.gallery__photo} />
							</figure>
						</div>

						<div className={styles.overview}>
							<h1 className={styles.overview__heading}>Hotel Kronos</h1>
							<div className={styles.overview__stars}>
								{[ 1, 2, 3, 4, 5 ].map((_) => (
									<svg key={_} className={styles.overview__iconStar}>
										<use xlinkHref={`${sprite_path}#icon-star`} />
									</svg>
								))}
							</div>

							<div className={styles.overview__location}>
								<svg className={styles.overview__iconLocation}>
									<use xlinkHref={`${sprite_path}#icon-location-pin`} />
								</svg>
								<button className={styles.btnInline}>Santorini, Greece</button>
							</div>

							<div className={styles.overview__rating}>
								<div className={styles.overview__ratingAverage}>8.6</div>
								<div className={styles.overview__ratingCount}>429 votes</div>
							</div>
						</div>

						<div className={styles.detail}>
							<div className={styles.description}>
								<p className={styles.paragraph}>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos
									debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt
									deserunt quae architecto voluptate.
								</p>
								<p className={styles.paragraph}>
									Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate
									delectus, inventore iure aliquid aliquam.
								</p>
								<ul className={styles.list}>
									<li className={styles.list__item}>Spectacular views</li>
									<li className={styles.list__item}>Breakfast included</li>
									<li className={styles.list__item}>Free airport shuttle</li>
									<li className={styles.list__item}>Free wifi in all rooms</li>
									<li className={styles.list__item}>Air conditioning and heating</li>
									<li className={styles.list__item}>Three pools</li>
									<li className={styles.list__item}>We speak all languages</li>
									<li className={styles.list__item}>Perfect for couples</li>
								</ul>
								<div className={styles.recommend}>
									<p className={styles.recommend__count}>Lucy and 3 friends recommend this hotel.</p>
									<div className={styles.recommend__friends}>
										<img src={user5} alt="Friend 5" className={styles.recommend__photo} />
										<img src={user4} alt="Friend 4" className={styles.recommend__photo} />
										<img src={user3} alt="Friend 3" className={styles.recommend__photo} />
										<img src={user6} alt="Friend 6" className={styles.recommend__photo} />
									</div>
								</div>
							</div>

							<div className={styles.userReviews}>
								<figure className={styles.review}>
									<blockquote className={styles.review__text}>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque
										architecto dicta animi, totam, itaque officia ex.
									</blockquote>
									<figcaption className={styles.review__user}>
										<img src={user1} alt="User 1" className={styles.review__photo} />
										<div className={styles.review__userBox}>
											<p className={styles.review__userName}>Nick Smith</p>
											<p className={styles.review__userDate}>Feb 23, 2019</p>
										</div>
										<div className={styles.review__rating}>7.8</div>
									</figcaption>
								</figure>

								<figure className={styles.review}>
									<blockquote className={styles.review__text}>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque
										architecto dicta animi.
									</blockquote>
									<figcaption className={styles.review__user}>
										<img src={user2} alt="User 2" className={styles.review__photo} />
										<div className={styles.review__userBox}>
											<p className={styles.review__userName}>Mary Thomas</p>
											<p className={styles.review__userDate}>Sep 13, 2019</p>
										</div>
										<div className={styles.review__rating}>9.3</div>
									</figcaption>
								</figure>

								<button className={styles.btnInline}>
									Show all
									<span>&rarr;</span>
								</button>
							</div>
						</div>

						<div className={styles.cta}>
							<h2 className={styles.cta__bookNow}>
								Good news! We have 4 free rooms for your selected dates!
							</h2>
							<button className={styles.btn}>
								<span className={styles.btn__visible}>Book now</span>
								<span className={styles.btn__invisible}>Only 4 rooms left</span>
							</button>
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}

export default Travello
