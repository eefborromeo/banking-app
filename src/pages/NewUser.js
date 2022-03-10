import React from "react";

export default function NewUser() {
    return (
        <main>
            <div className="sidebar">

            </div>
            <div className="content">
                <form>
                    <div>
                        <p>Name</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Initial Balance</p>
                        <input type="number" />
                    </div>
                    <button type="submit" />
                </form>
            </div>
        </main>
    )
}

