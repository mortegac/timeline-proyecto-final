import Instructions from './stages/instructions';
import Stage1 from './stages/stage1';
import Stage2 from './stages/stage2';
import Stage3 from './stages/stage3';
import Stage4 from './stages/stage4';
import Stage5 from './stages/stage5';
import Stage6 from './stages/stage6';
import Stage7 from './stages/stage7';


const Content = ()=>{

	return(

		<ul className="timeline is-centered">
		
			<Instructions/>
			<Stage1/>
			<Stage2/>
			<Stage3/>
			<Stage4/>
			{/* <Stage5/> */}
			<Stage6/>
			<Stage7/>

		</ul>
	)

}

export default Content;