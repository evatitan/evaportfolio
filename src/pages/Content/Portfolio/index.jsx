import React, { Component } from 'react';

export default class Portfolio extends Component {
	render() {
		return (
			<div className="columns">
				<div className="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">Card header</p>
						</header>
						<div class="card-image">
							<figure class="image is-4by3">
								<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
							</figure>
						</div>
						<footer class="card-footer">
							<p class="card-footer-item">
								<span>
									View on
									<a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
								</span>
							</p>
							<p class="card-footer-item">
								<span>
									Share on <a href="#">Facebook</a>
								</span>
							</p>
						</footer>
					</div>
				</div>
			</div>
		);
	}
}
