import { addDoc, collection, getDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"

const productsRef = collection(db, "products");

export const getProducts = async () => {

    try {
        const snapshot = await getDocs(productsRef);

        const productsFormat = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });

        return productsFormat;
    }
    catch (error) {
        console.error("Ocurrió un error al traer los productos:", error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const productsRef = doc(productsRef, id);
        const snapshot = await getDoc(productsRef);

        if (snapshot.exists()) {
            const product = { id: snapshot.id, ...snapshot.data() };
            console.log("Doc:", product);
            return product;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error al traer el producto por ID:", error);
        throw error;
    }
};

export const createProduct = async (productData) => {
    try {
        const docRef = await addDoc(productsRef, productData);
        return docRef.id;
    } catch (error) {
        console.error("Error al crear el producto:", error);
        throw error;
    }
}