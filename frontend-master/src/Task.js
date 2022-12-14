import React from 'react';

import ImgLogo1 from './res/task_logos/1.svg';
import ImgLogo2 from './res/task_logos/2.jpg';
import ImgLogo3 from './res/task_logos/3.jpg';
import ImgLogo4 from './res/task_logos/4.jpg';
import ImgLogo5 from './res/task_logos/5.png';
import ImgLogo6 from './res/task_logos/6.jpg';
import ImgTask from './res/task.svg';
import DataTask from './res/task_data.json'

const LogoSet = [
    ImgLogo1,
    ImgLogo2,
    ImgLogo3,
    ImgLogo4,
    ImgLogo5,
    ImgLogo6
];


class Task extends React.Component {
    render() {
        let listComp = [];
        for (let i = 0; i < DataTask.length; i++) {
            let item = DataTask[i];

            listComp.push(
                <article key={i} className="uk-margin uk-comment uk-comment-primary">
                    <header className="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid="true">
                        <div className="uk-width-auto">
                            <img className="uk-comment-avatar" src={LogoSet[item.logo]} width="80" height="80" alt="" />
                        </div>
                        <div className="uk-width-expand">
                            <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-heading" href="#">{item.title}</a></h4>
                            <ul className="uk-comment-meta uk-subnav uk-margin-remove-top">
                                <li><span>{item.ddl}</span></li>
                                <li><span>{item.from}</span></li>
                            </ul>
                        </div>
                    </header>
                    <div className="uk-comment-body">
                        <ul className="uk-comment-meta uk-subnav uk-margin-remove-top">
                            <li><span>{item.features[0]}</span></li>
                            <li><span>{item.features[1]}</span></li>
                            <li><span>{item.features[2]}</span></li>
                            <li><span>{item.features[3]}</span></li>
                        </ul>
                    </div>
                </article>
            );
        }

        return (
            <div className="uk-container uk-margin-large-top">
                <h2 className="uk-text-center">???????????????</h2>
                <div className="uk-container uk-margin-large-top" uk-grid="true">
                    <div className="uk-width-1-4">
                        <ul className="uk-nav uk-nav-default uk-visible@m">
                            <li className="uk-active"><a href="#"><p className="switcher-large-text">??????</p></a></li>
                            <li className="uk-parent">
                                <a href="#"><p className="switcher-large-text">??????</p></a>
                                <ul className="uk-nav-sub">
                                    <li><a href="#"><p className="switcher-large-text">??????</p></a></li>
                                    <li><a href="#"><p className="switcher-large-text">??????</p></a></li>
                                    <li><a href="#"><p className="switcher-large-text">??????</p></a></li>
                                </ul>
                            </li>
                            <li className="uk-parent">
                                <a href="#"><p className="switcher-large-text">??????</p></a>
                                <ul className="uk-nav-sub">
                                    <li><a href="#"><p className="switcher-large-text">??????</p></a></li>
                                    <li><a href="#"><p className="switcher-large-text">??????</p></a></li>
                                    <li><a href="#"><p className="switcher-large-text">??????</p></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="uk-width-1-1 uk-width-expand@m">
                        {listComp}
                    </div>
                </div>

                <div className="uk-flex-middle uk-margin-large">
                    <div className="uk-width-expand">
                        <img src={ImgTask} alt="Image" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;
