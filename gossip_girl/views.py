from django.shortcuts import render, redirect
from gossip_girl.forms import BlogForm
from gossip_girl.models import Blog


# Create your views here.

def home(request):
    data = {}
    data['db'] = Blog.objects.all()
    return render(request, 'index.html', data)

def blog(request):
    data = {}
    data['form'] = BlogForm()
    return render(request, 'blog.html', data)

def create(request):
    form = BlogForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('home')
    
def view(request, pk):
    data = {}
    data['db'] = Blog.objects.get(pk=pk)
    return render(request, 'view.html', data)

def edit(request, pk):
    data = {}
    data['db'] = Blog.objects.get(pk = pk)
    data['form'] = BlogForm(instance=data['db'])
    return render(request, 'forms.html', data)

def update(request, pk):
    data = {}
    data['db'] = Blog.objects.get(pk = pk)
    form = BlogForm(request.POST or None,  instance = data['db'])
    if form.is_valid():
        form.save()
        return redirect('home')
    
def delete(request, pk):
    db = Blog.objects.get(pk = pk)
    db.delete()
    return redirect('home')