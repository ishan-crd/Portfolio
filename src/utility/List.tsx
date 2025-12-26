import { motion } from "motion/react"

interface ListProps {
    sno: number;
    name: string;
    logo: string;
}

const List: React.FC<ListProps> = ({ sno, name, logo }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: "15%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1 }}
                viewport={{ once: true ,amount:.5}}
                className='font-inter-display-bold flex justify-between items-center gap-3 border-y py-2 md:py-4 px-1 md:px-2 border-[#403b3b] hover:bg-[#403b3b] hover:scale-101 transition ease-in duration-100' >
                <div className="flex justify-start items-center gap-3 ">
                    <img src={logo} className="w-10 h-10 p-2 border-2 border-[#403b3b] rounded" />
                    <span className="text-base lg:text-lg whitespace-nowrap">
                        {name}
                    </span>
                </div>
                <span className="font-dm-mono text-base lg:text-lg">
                    0{sno}
                </span>
            </motion.div>
        </>
    )
}

export default List
