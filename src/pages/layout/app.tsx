
import { Header } from "@/components/components_project/Header"
import { Outlet } from "react-router-dom"

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">

        <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6 bg-blue-100">

        <Outlet />

        <footer className="text-sm text-muted-foreground text-center mt-8">
          Copyright &copy; {new Date().getFullYear()} | MULT TECH CONSULTORIA E TECNOLOGIA LTDA | Todos os direitos reservados. 
        </footer>

      </div>

      

    </div>
  )
}