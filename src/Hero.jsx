import heroImg from './assets/hero.svg'

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Contentful CMS</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui quaerat rerum earum maiores nemo, ut
						minima corporis eius assumenda sint sit pariatur iusto necessitatibus voluptas suscipit incidunt, saepe a?
					</p>
				</div>
				<div className='img-container'>
					<img src={heroImg} alt='woman and the browser' className='img' />
				</div>
			</div>
		</section>
	)
}
export default Hero
