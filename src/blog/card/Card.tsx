export default function Card() {
    let name = "Willy Tell"
    const headerAddon = name + " meint:"
    return (
        <>
            <div className="blog">
                <img src="../../../public/avatar/male-5768177_640.webp"/>
                <header>{headerAddon}</header>
                <h2 className="h2_answer_question">Warum 42 die Antwort aller Fragen ist?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet aperiam atque autem beatae
                    corporis cum doloribus est et, explicabo laudantium obcaecati omnis quae, quia quod sequi veniam
                    voluptates voluptatum.</p>
            </div>
            <div className="blog">
                <img src="../../../public/avatar/avatar-1606914_640.webp"/>
                <header>{headerAddon}</header>
                <h2 className="h2_answer_question">Warum 42 die Antwort aller Fragen ist?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet aperiam atque autem beatae
                    corporis cum doloribus est et, explicabo laudantium obcaecati omnis quae, quia quod sequi veniam
                    voluptates voluptatum.</p>
            </div>
            <div className="blog">
                <img src="../../../public/avatar/woman-5768124_640.webp"/>
                <header>{headerAddon}</header>
                <h2 className="h2_answer_question">Warum 42 die Antwort aller Fragen ist?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet aperiam atque autem beatae
                    corporis cum doloribus est et, explicabo laudantium obcaecati omnis quae, quia quod sequi veniam
                    voluptates voluptatum.</p>
            </div>
        </>
    )
}