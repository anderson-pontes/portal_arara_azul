
import { Header } from "@/components/components_project/Header"
import { Outlet } from "react-router-dom"

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">

        <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">

        <Outlet />

        <footer className="text-sm text-muted-foreground text-center mt-8">
          Copyright &copy; TCE-PA {new Date().getFullYear()} | AD INFORMÁTICA - Todos os direitos reservados. 
        </footer>

      </div>

      

    </div>
  )
}