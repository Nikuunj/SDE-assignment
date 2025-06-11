function FancyText({ text }: { text: string }) {
  return (
    <p className="flex  z-20 bg-gradient-to-b from-neutral-400 text-center md:from-neutral-300/90 to-neutral-800 md:to-neutral-800 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-6xl">
            {text}
    </p>
  )
}

export default FancyText