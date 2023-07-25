import style from './page.module.scss'
import Counter from "@/components/Counter";

export default async function Home() {
    const fakeLoading = await fakeLoadingFctn()
    
    return (
        <div className={style.homepage}>
    
            <p>Page d'accueil</p>
            <Counter />
        </div>
    )
}


function fakeLoadingFctn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 3000);
    });
}