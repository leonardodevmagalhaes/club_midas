
import styled from 'styled-components';

export const Content = styled.div`

main{
    width: 100%;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4{
        color: var(--midasWhite);
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 0.09rem;
    }
    
}
.widthConatinerMain{
    width: 80%;
    height: 100%;    

    display: grid;
    grid-template-columns: 1fr 1fr;

}

.section1{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .space{
        width: 100%;
        height: 15%;

        display: flex;
        align-items: flex-end;
        justify-content: flex-end;

        h3{
            color: var(--midasWhite);
            font-size: 1.2rem;
            font-weight: 400;
            letter-spacing: 0.1rem;
            margin-right: 2rem;
        }
    }

    .marquee{
        height: 70%;
        border-right: 1px solid var(--midasWhite);

        display: flex;
        align-items: center;
        justify-content: center;

        h2{
            text-align: right;
            margin: 0 2rem 0 2rem;
            color: var(--midasYellow);
            span{
                color: var(--midasWhite);
            }
        }
    }

    
}

.section2{
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

}


`;

export function Main(){
    return(
        <Content>
            <main>
                <div className="widthConatinerMain">
                    <section className='section1'>
                        <div className="space"></div>
                        <div className="marquee">
                            <h2>
                                Seja membro do <span>Club MIDAS</span> e obtenha descontos de 
                                combustível e outros benefícos
                            </h2>
                        </div>
                        <div className="space"> <h3>Saiba mais</h3> </div>

                    </section>
                    
                    <section className="section2">

                        <form action=""></form>

                    </section>
                </div>
                                
            </main>
        </Content>
    )
}