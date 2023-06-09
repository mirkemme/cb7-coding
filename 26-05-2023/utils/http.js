const BASE_URL = "https://dummyjson.com/todos/";
const ADD_URL = "https://dummyjson.com/todos/add";

export const GET = async (endpoint = "") => {
    const res = await fetch(BASE_URL + endpoint)
    // .then((res) => {
    try {
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error("Response failed!");
        }
    } catch (error) {
        console.error(error);
        return { todos: [{ todo: "Lista non trovata" }] };
    } finally {
        // console.log("Questo è il FINALLY opzionale")
    }
};

export const POST = async (endpoint, body) => {
    const res = await fetch(ADD_URL + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    try {
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error("Response failed!");
        }
    } catch (error) {
        console.error(error);
        return { todos: [{ todo: "Errore" }] };
    } finally {
        // console.log("Questo è il FINALLY opzionale")
    }
};

export const DELETE = async (endpoint) => {
    const res = await fetch(BASE_URL + endpoint, {
        method: "DELETE",
    });
    try {
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error("Response failed!");
        }
    } catch (error) {
        console.error(error);
        return { todos: [{ todo: "Errore" }] };
    } finally {
        // console.log("Questo è il FINALLY opzionale")
    }
}