/**
 * Shared framer-motion feature bundle.
 * Using `domAnimation` (≈18 kB) instead of the full bundle (≈100 kB).
 * Import `m` from "framer-motion" instead of `motion` in every component,
 * and wrap the tree in <LazyMotion features={loadFeatures} strict>.
 */
export { domAnimation as default } from "framer-motion";
