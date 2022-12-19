import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import { StateContext } from "../context/StateContext";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { PageAnimation } from "../Animation/PageAnimation";
import "react-toastify/dist/ReactToastify.css";



export default function App({ Component, pageProps }: AppProps) {

	const router = useRouter();
	
	return (
		<StateContext>
			<Layout>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				<AnimatePresence mode="wait" initial={false}>
					<motion.div
						key={router.route}
						initial={PageAnimation.initial}
						animate={PageAnimation.animate}
						exit={PageAnimation.exit}
						transition={PageAnimation.transition}
					>
						<Component {...pageProps} />
					</motion.div>
				</AnimatePresence>
			</Layout>
		</StateContext>
	);
}
