import StyledEcology from "./StyledEcology";
import { useEffect, useState } from "react";

import numbers from '../../images/ecology/numbers.png';
import tree1 from '../../images/ecology/tree-1.png';
import tree2 from '../../images/ecology/tree-2.png';

const Ecology = () => {

    const [control, setControl] = useState(false);
    const [planted, setPlanted] = useState(null);
    const [trees, setTrees] = useState([]);
    const [goal, setGoal] = useState(false);

    useEffect(() => {
        if(control) {
            animate();
        }
    },[control])
    
    const animate = () => {
        let tmp = [];
        let plantedInt = Math.floor(Math.random() * 13000) + 1;
        let plantedStr = [...plantedInt.toString()];
        let plantedArr = [...plantedStr];

        while(plantedArr.length < 5) {
            plantedArr.unshift("0");
        }
        setPlanted(plantedArr);

        for(let i = 0; i < Math.floor(plantedInt/1000) && i < 10; i++) {
            tmp.push(Math.floor(Math.random() * 2));
        }
        setTrees(tmp);

        if(plantedInt >= 10000) {
            setGoal(true);
        }
    }

    useEffect(() => {
        let mounted = true;

        if(mounted === true) {
            window.addEventListener('scroll', () => inViewPort(document.querySelector('.container-2')));
        }
        return () => {mounted = false};
    }, []);

    const inViewPort = (element) => {
        if(control === false){
            if(element !== undefined && element !== null) {
                let rect = element.getBoundingClientRect();
                if(rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
                    setControl(true);
                }
            }
        }
    }

    return (

        <StyledEcology arr = {planted} goal = {goal}>
            <h2>Trees planted so far</h2>
            <div className="container">
                <div className="counter">
                    <div className="counter__number">
                        <img src={numbers} alt="Numbers" className='roll-first'/>
                    </div>
                    <div className="counter__number">
                        <img src={numbers} alt="Numbers" className='roll-second'/>
                    </div>
                    <div className="counter__number">
                        <img src={numbers} alt="Numbers" className='roll-third'/>
                    </div>
                    <div className="counter__number">
                        <img src={numbers} alt="Numbers" className='roll-forth'/>
                    </div>
                    <div className="counter__number">
                        <img src={numbers} alt="Numbers" className='roll-fifth'/>
                    </div>
                </div>
                <div className="text">
                    <h3>Goal: 10.000 trees</h3>
                    <p>We care about our planet and encourage you to join us in the mission to plant as many trees as possible. All you need to do is enjoy the cookies and we will do the rest. We donate 1 cent from every cookie purchased. Once the goal is reached, we will reduce the prices of all orders by <span> 10% </span> for the rest of the year.</p>
                </div>
            </div>
            
            <div className="container-2">
                {trees[0] !== undefined?
                <div className="tree">
                    <div className="tree__wrap" id={control?'tree-squish-1':''}>
                        <img src={trees[0]?tree1:tree2} alt={trees[0]?'Tree':'Pine tree'} className={control?'tree-pop-1':''}/>
                    </div>
                </div>
                :''}
                {trees[1] !== undefined?
                <div className="tree">
                    <div className="tree__wrap" id={control?'tree-squish-2':''}>
                        <img src={trees[1]?tree1:tree2} alt={trees[1]?'Tree':'Pine tree'} className={control?'tree-pop-2':''}/>
                    </div>
                </div>
                :''}
                {trees[2] !== undefined?
                <div className="tree">
                    <div className="tree__wrap" id={control?'tree-squish-3':''}>
                        <img src={trees[2]?tree1:tree2} alt={trees[2]?'Tree':'Pine tree'} className={control?'tree-pop-3':''}/>
                    </div>
                </div>
                :''}
                {trees[3] !== undefined?
                <div className="tree">
                    <div className="tree__wrap" id={control?'tree-squish-4':''}>
                        <img src={trees[3]?tree1:tree2} alt={trees[3]?'Tree':'Pine tree'} className={control?'tree-pop-4':''}/>
                    </div>
                </div>
                :''}
                {trees[4] !== undefined?
                <div className="tree">
                    <div className="tree__wrap" id={control?'tree-squish-5':''}>
                        <img src={trees[4]?tree1:tree2} alt={trees[4]?'Tree':'Pine tree'} className={control?'tree-pop-5':''}/>
                    </div>
                </div>
                :''}
                {trees[5] !== undefined?
                <div className="tree">
                    <div className="tree__wrap" id={control?'tree-squish-6':''}>
                        <img src={trees[5]?tree1:tree2} alt={trees[0]?'Tree':'Pine tree'} className={control?'tree-pop-6':''}/>
                    </div>
                </div>
                :''}
                {trees[6] !== undefined?
                <div className="tree">
                    <div className="tree__wrap" id={control?'tree-squish-7':''}>
                        <img src={trees[6]?tree1:tree2} alt={trees[6]?'Tree':'Pine tree'} className={control?'tree-pop-7':''}/>
                    </div>
                </div>
                :''}
                {trees[7] !== undefined?
                <div className="tree">
                    <div className="tree__wrap" id={control?'tree-squish-8':''}>
                        <img src={trees[7]?tree1:tree2} alt={trees[7]?'Tree':'Pine tree'} className={control?'tree-pop-8':''}/>
                    </div>
                </div>
                :''}
                {trees[8] !== undefined?
                <div className="tree">
                    <div className="tree__wrap" id={control?'tree-squish-9':''}>
                        <img src={trees[8]?tree1:tree2} alt={trees[8]?'Tree':'Pine tree'} className={control?'tree-pop-9':''}/>
                    </div>
                </div>
                :''}
                {trees[9] !== undefined?
                <div className="tree">
                    <div className="tree__wrap" id={control?'tree-squish-10':''}>
                        <img src={trees[9]?tree1:tree2} alt={trees[9]?'Tree':'Pine tree'} className={control?'tree-pop-10':''}/>
                    </div>
                </div>
                :''}
            </div>
            
        </StyledEcology>

    );
}
 
export default Ecology;