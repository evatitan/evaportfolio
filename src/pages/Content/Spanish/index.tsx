// import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook } from '@fortawesome/free-solid-svg-icons';
// import { levels, selectedLevel, sayings } from './sayings.json';
// import './index.css';

// interface Level {
//   id: string;
//   name: string;
//   value: number | null;
// }

// interface Saying {
//   id: string;
//   title: string;
//   means: string;
//   level: number;
//   example?: string;
//   showLevel: boolean;
//   showSearch: boolean;
//   showExample: boolean;
// }

// interface SpanishState {
//   selectedLevel: Level;
//   levels: Level[];
//   sayings: Saying[];
// }

// export default class Spanish extends Component<{}, SpanishState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       selectedLevel,
//       levels,
//       sayings: sayings
//         .map((saying: Omit<Saying, 'showLevel' | 'showSearch' | 'showExample'>) => ({
//           ...saying,
//           showLevel: true,
//           showSearch: true,
//           showExample: false,
//           example: saying.example || saying.title,
//         }))
//         .sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())),
//     };
//   }

//   handleSearchChange = (searchText: string): void => {
//     const { sayings } = this.state;

//     const normalizedText = searchText.toUpperCase().trim();

//     const newSayings = sayings.map(saying => {
//       return { ...saying, showSearch: saying.title.toUpperCase().includes(normalizedText) };
//     });

//     this.setState({
//       sayings: newSayings,
//     });
//   };

//   handleLevelChange = (id: string): void => {
//     const { sayings, levels } = this.state;
//     // Encontramos la nueva opcion seleccionada
//     const newSelectedLevel = levels.find(level => level.id === id);

//     const newSayings = sayings.map(saying => {
//       return {
//         ...saying,
//         showLevel: newSelectedLevel.value === null || newSelectedLevel.value === saying.level,
//       };
//     });

//     this.setState({
//       selectedLevel: newSelectedLevel,
//       sayings: newSayings,
//     });
//   };

//   handleSayingClick = (id: string): void => {
//     const { sayings } = this.state;

//     const newSayings = sayings.map(saying => {
//       if (saying.id === id) {
//         return { ...saying, showExample: !saying.showExample };
//       } else return saying;
//     });
//     this.setState({ sayings: newSayings });
//   };

//   renderSaying = (saying: Saying): React.ReactNode => {
//     if (saying.showLevel === false || saying.showSearch === false) return null;

//     return (
//       <div key={saying.id}>
//         <a
//           className="panel-block is-active"
//           href="/"
//           onClick={e => this.handleSayingClick(saying.id)}
//         >
//           <span className="panel-icon">
//             <FontAwesomeIcon icon={faBook} />
//             <i className="fas fa-book" aria-hidden="false" />
//           </span>
//           <b> {saying.title}</b>
//         </a>
//         <div className="sayingMeans">
//           {saying.showExample && (
//             <p>
//               <i>
//                 <b>Significado : </b>
//               </i>
//               {saying.means}
//               <br />
//               <i>
//                 <b>Ejemplo : </b>
//               </i>
//               {saying.example}
//             </p>
//           )}
//         </div>
//       </div>
//     );
//   };

//   render() {
//     return (
//       <div className="page-spanish">
//         <article className="panel is-info">
//           <p className="panel-heading">Spanish Sayings</p>
//           <p className="panel-tabs" id="levels">
//             {this.state.levels.map(level => {
//               return (
//                 <a
//                   href="/"
//                   key={level.id}
//                   className={level.id === this.state.selectedLevel.id ? 'is-active' : ''}
//                   onClick={() => this.handleLevelChange(level.id)}
//                 >
//                   {level.name}
//                 </a>
//               );
//             })}
//           </p>
//           <div className="panel-block">
//             <p className="control has-icons-left">
//               <input
//                 onChange={e => this.handleSearchChange(e.target.value)}
//                 className="input is-info"
//                 id="sayingInput"
//                 type="text"
//                 placeholder="Search"
//               />

//               {/* <span className="icon is-left">
// 								<i className="fas fa-search" aria-hidden="true" />
// 							</span> */}
//             </p>
//           </div>
//           <div id="sayingList">{this.state.sayings.map(this.renderSaying)}</div>
//         </article>
//       </div>
//     );
//   }
// }
export {};
