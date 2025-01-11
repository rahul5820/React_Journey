import styles from './Follow.module.css';

export default function Follow() {
    const inlineCss={
       backgroundColor :"hsla(200, 100%, 50%)",
        
        padding:"20px 20px" ,
        color: 'white',
        boxShadow: "5px 5px 5px hsla(0, 0%, 12%, 0.104)",
        borderRadius:"10px"
    }
  return (
    <div className="Wrap">
        <div className="Follow">
            <h1>hlw</h1>
            <button className={styles.Follow}>Click me</button>
            <button style={inlineCss}>Inline way</button>
        </div>
    </div>
  )
}
