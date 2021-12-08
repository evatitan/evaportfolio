import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { saying } from './sayings.json';
import './index.css';

export default class Spanish extends Component {
	render() {
		return (
			<div className="page-spanish">
                
				<div class="dropdown is-hoverable">
					<div class="dropdown-trigger">
						<button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
							<span>Hover me</span>
							<span class="icon is-small">
								<i class="fas fa-angle-down" aria-hidden="true" />
							</span>
						</button>
					</div>
					<div class="dropdown-menu" id="dropdown-menu4" role="menu">
						<div class="dropdown-content">
							<div class="dropdown-item">
								<p>
								</p>
							</div>
						</div>
					</div>
				</div>

				<article class="panel is-info">
					<p class="panel-heading">Spanish Sayings that I Konw</p>
					<p class="panel-tabs">
						<a class="is-active">All</a>
						<a>Easy</a>
						<a>Difficult</a>
					</p>
					<div class="panel-block">
						<p class="control has-icons-left">
							<label htmlFor="">
								<input class="input is-info" type="text" placeholder="Search" />
							</label>

							<span class="icon is-left">
								<i class="fas fa-search" aria-hidden="true" />
							</span>
						</p>
					</div>

					{saying.map((sayingObj) => {
						return (
							<a class="panel-block is-active">
								<span class="panel-icon">
									<FontAwesomeIcon icon={faBook} />
								</span>
								{sayingObj.saying}
							</a>
						);
					})}
				</article>
			</div>
		);
	}
}
